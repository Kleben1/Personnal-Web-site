import {
  Network, Shield, Bot, Terminal, ShieldAlert,
  Server, Cpu, Layers, Lock, Search, Activity, Braces, Binary,
  FileCode2, Radar, Database, FileSpreadsheet, MonitorCog
} from 'lucide-react';

import {
  SiTailwindcss, SiCss, SiHtml5, SiNextdotjs, SiTypescript,
  SiPython, SiMysql, SiC, SiLinux,
  SiDocker, SiKubernetes, SiGit, SiGithub, SiCisco, SiVmware, SiOpenvpn, SiLetsencrypt,
  SiPandas, SiNumpy,
  SiOpenai, SiKalilinux, SiWireshark, SiClaude
} from 'react-icons/si';

import { RiFileExcel2Line } from "react-icons/ri";
import { VscVscode } from 'react-icons/vsc';
import { FaJava } from 'react-icons/fa6';
import { RiGeminiFill } from "react-icons/ri";
import { FaProjectDiagram } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { GoLaw } from "react-icons/go";
import { FaKey } from "react-icons/fa";
import { SiSnort } from "react-icons/si";





export const skillsData = {
  dev: [
    // Frontend
    { name: 'TailwindCSS', icon: SiTailwindcss },
    { name: 'CSS', icon: SiCss },
    { name: 'HTML', icon: SiHtml5 },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'TypeScript', icon: SiTypescript },
    // Backend
    { name: 'Python', icon: SiPython },
    { name: 'MySQL', icon: SiMysql },
    { name: 'VBA', icon: FileCode2 },
    { name: 'C', icon: SiC },
    { name: 'Java', icon: FaJava },
    // Outils
    { name: 'Linux', icon: SiLinux },
    { name: 'VS Code', icon: VscVscode },
    { name: 'Antigravity', icon: Bot },
    { name: 'Docker', icon: SiDocker },
    { name: 'Kubernetes', icon: SiKubernetes },
    { name: 'Git', icon: SiGit },
    { name: 'GitHub', icon: SiGithub },
  ],
  network: [
    { name: 'Cisco', icon: SiCisco },
    { name: 'OSI Model', icon: Layers },
    { name: 'Protocoles', icon: Activity },
    { name: 'Architecture Réseau', icon: Network },
    { name: 'VM', icon: SiVmware },
    { name: 'Equipement', icon: Server },
    { name: 'VLAN', icon: Layers },
    { name: 'VPN', icon: SiOpenvpn },
    { name: 'SSL', icon: SiLetsencrypt },
    { name: 'Analyse', icon: Search },
    { name: 'Detection', icon: Radar },
  ],
  data: [
    { name: 'Excel', icon: RiFileExcel2Line },
    { name: 'VBA', icon: FileCode2 },
    { name: 'Pandas', icon: SiPandas },
    { name: 'Numpy', icon: SiNumpy },
    { name: 'Power BI', icon: MonitorCog },
    { name: 'Lois Data', icon: GoLaw },
  ],
  ai: [
    { name: 'Claude', icon: SiClaude },
    { name: 'Gemini', icon: RiGeminiFill },
    { name: 'Chat GPT', icon: SiOpenai },
    { name: 'OpenClaw', icon: Bot },
    { name: 'LM Studio', icon: Cpu },
    { name: 'RAG', icon: Database },
    { name: 'Agentic', icon: FaProjectDiagram },
  ],
  cyber: [
    { name: 'Hardening', icon: Lock },
    { name: 'Cryptographie', icon: FaKey },
    { name: 'Active Directory', icon: Server },
    { name: 'Firewall', icon: ShieldAlert },
    { name: 'Wireshark', icon: SiWireshark },
    { name: 'Snort', icon: SiSnort },
    { name: 'Kali Linux', icon: SiKalilinux },
    { name: 'Nmap', icon: FaRegEye },
    { name: 'RGPD', icon: GoLaw },
  ]
};
