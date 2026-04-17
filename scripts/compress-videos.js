import ffmpegInstaller from "@ffmpeg-installer/ffmpeg";
import ffmpeg from "fluent-ffmpeg";
import fs from "fs";
import path from "path";

ffmpeg.setFfmpegPath(ffmpegInstaller.path);

const videoDir = path.join(process.cwd(), "videos");
const outDir = path.join(process.cwd(), "public", "videos");

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Convert all mp4 files in videos directory
fs.readdir(videoDir, (err, files) => {
  if (err) {
    console.error("Error reading dir:", err);
    return;
  }

  const videos = files.filter(f => f.endsWith(".mp4"));
  
  videos.forEach(file => {
    const inboundPath = path.join(videoDir, file);
    // Convert to webm for better compression on web
    const outboundPath = path.join(outDir, file.replace(".mp4", ".webm"));
    
    if (fs.existsSync(outboundPath)) {
      console.log(`Video ${file} already compressed.`);
      return;
    }

    console.log(`Compressing ${file}...`);
    
    ffmpeg(inboundPath)
      .outputOptions([
        "-c:v libvpx-vp9",
        "-crf 30",
        "-b:v 0",
        "-y"
      ])
      .on("end", () => {
        console.log(`Successfully compressed ${file} to .webm!`);
      })
      .on("error", (err) => {
        console.error(`Error compressing ${file}:`, err);
      })
      .save(outboundPath);
  });
});
