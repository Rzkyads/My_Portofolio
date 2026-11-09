export const personalInfo = {
  name: "RIZKY ADE SATRIYA",
  title: "Network & Infrastructure Engineer",
  brand: "RIZKY ADE SATRIYA | Rzkyads",
  badge: "Network Deployment & Activation Engineer | ISP Managed Services",
  location: "Bekasi, Jawa Barat",
  email: "rzkyadesatriya@gmail.com",
  phone: "+62 823-2209-7625",
  linkedin: "https://linkedin.com/in/rizkyadesatriya",
  github: "https://github.com/Rzkyads",
  summary: "Spesialis dalam Network Provisioning, High-Availability BGP/BFD Redundancy, dan Manajemen Infrastruktur ISP skala Enterprise (500+ Client Dedicated & Broadband). Memadukan keahlian MikroTik, HP Switch, Ruijie, Omada SDN, serta Network Security (ECIH & CND)."
};

export const metrics = [
  { value: "500+", label: "Active Clients", description: "Penanganan infrastruktur Dedicated & Broadband ISP" },
  { value: "Sub-Second", label: "BFD Failover", description: "Deteksi kegagalan link otomatis pada protokol BGP" },
  { value: "99.9%", label: "SLA Target", description: "Monitoring upstream link, latensi, dan failover otomatis" },
  { value: "3.92 / 4.00", label: "GPA (IPK)", description: "Telkom University Purwokerto (Teknik Informatika)" }
];

export const aboutData = {
  paragraph1: "Saya adalah seorang Network & Infrastructure Engineer dan lulusan Teknik Informatika Telkom University Purwokerto (IPK 3.92/4.00) dengan spesialisasi pada Network Provisioning, administrasi MikroTik, serta manajemen infrastruktur server & keamanan jaringan.",
  paragraph2: "Saat ini bertugas di PT. Varnion Technology Semesta sebagai Network Deployment & Activation Engineer sekaligus Project Manager untuk implementasi Redundansi BGP/BFD. Berpengalaman mengelola operasional jaringan ISP dengan beban 500+ Klien (Dedicated & Broadband Enterprise) serta menyediakan Managed Services end-to-end—mulai dari perencanaan topologi, konfigurasi L2/L3 (MikroTik, HP Switch, Ruijie, TP-Link Omada), hingga pemenuhan SLA & penanganan insiden siber.",
  strengths: [
    {
      title: "ISP & Enterprise Networking",
      description: "Provisioning end-to-end, BGP/BFD routing, VLAN, NAT, Firewall."
    },
    {
      title: "Multi-Vendor Ecosystem",
      description: "Integrasi & administrasi MikroTik, Switch HP, Ruijie, dan TP-Link Omada."
    },
    {
      title: "Infrastructure & Security",
      description: "Maintenance Fiber Optic, Wi-Fi Enterprise, IP CCTV, serta mitigasi insiden siber."
    }
  ]
};

export const certifications = [
  {
    name: "Omada Certified Network Associate (OCNA) - Routing & Switching",
    issuer: "TP-Link (2025)",
    focus: "Konfigurasi L2/L3 Routing, VLAN, & Switch Management pada Ekosistem Omada SDN."
  },
  {
    name: "Omada Certified Network Associate (OCNA) - Wireless",
    issuer: "TP-Link (2025)",
    focus: "Perencanaan, Deployment, & Optimalisasi Jaringan Nirkabel Enterprise via Omada Controller."
  },
  {
    name: "EC-Council Certified Incident Handler (ECIH)",
    issuer: "EC-Council & PT Synnex Metrodata Indonesia (2023)",
    focus: "Incident Response, Detection, & Cyber Attack Mitigation (Blue Team SOC)."
  },
  {
    name: "Computer Network Defense (CND)",
    issuer: "EC-Council & PT Synnex Metrodata Indonesia (2023)",
    focus: "Perimeter Defense, Network Security Architecture, & Threat Analysis."
  }
];

export const skillCategories = [
  {
    category: "ISP Routing & Switching",
    items: ["BGP & BFD Failover", "OSPF & Dynamic Route", "VLAN, L2/L3 Segment", "NAT & Bandwidth Mgmt"],
    detail: "Perancangan jalur redundansi otomatis, rerouting instan, dan segmentasi L2/L3."
  },
  {
    category: "Hardware & Vendor",
    items: ["MikroTik RouterOS", "HP Enterprise Switches", "Ruijie Reyee", "TP-Link Omada SDN"],
    detail: "Provisioning & deployment perangkat core, distribution, serta access point enterprise."
  },
  {
    category: "Security & Network OS",
    items: ["EC-Council CND / ECIH", "SIEM Alert Analysis", "Linux Ubuntu Server", "Firewall & NAT Rules"],
    detail: "Perimeter security, mitigation serangan jaringan, & incident logging (SOC Blue Team)."
  },
  {
    category: "Tools & Automation",
    items: ["Python & FastAPI", "Docker & Container", "WireGuard VPN", "Wireshark & GNS3"],
    detail: "Otomasi backup konfigurasi multi-vendor, VPN dashboard, & deep packet analysis."
  }
];

export const projects = [
  {
    id: "bgp-bfd",
    title: "BGP with BFD Automatic Reroute & Redundancy",
    company: "PT. Varnion Technology Semesta",
    category: "Enterprise ISP Routing & High Availability",
    type: "Project Management & Lead Engineering",
    description: "Memimpin perencanaan dan penerapan BFD (Bidirectional Forwarding Detection) di atas BGP pada router MikroTik untuk menjamin zero-downtime failover bagi 500+ Klien Dedicated & Broadband.",
    challenge: "Kegagalan link utama BGP konvensional membutuhkan waktu deteksi hingga puluhan detik (keepalive timer), yang memicu komplain SLA dari klien dedicated.",
    impact: "Menjaga uptime konektivitas sesuai target SLA (99.9%) serta mengeliminasi potensi komplain akibat link flap atau kabel putus.",
    solutions: [
      "Merancang arsitektur BFD pada core router MikroTik untuk mendeteksi link failure dalam skala milidetik (sub-second).",
      "Mengonfigurasi mekanisme reroute otomatis yang langsung mengalihkan trafik ke jalur backup tanpa intervensi manual.",
      "Menyusun dokumentasi Prosedur Operasional Standar (SOP) dan pengujian simulasi link failure."
    ],
    techStack: ["MikroTik", "BGP", "BFD", "SLA Monitoring"],
    github: "",
    image: ""
  },
  {
    id: "akpol-infra",
    title: "End-to-End Campus Infrastructure & Managed Services",
    company: "PT. Varnion Technology Semesta (Akpol Semarang)",
    category: "Enterprise Infrastructure & Fiber Optic Maintenance",
    type: "Onsite Infrastructure Lead",
    description: "Pengelolaan harian penuh infrastruktur jaringan internal Akademi Kepolisian Semarang yang mencakup Core Router/Switch, Firewall, Wi-Fi Enterprise, IP CCTV, dan backbone Fiber Optic.",
    challenge: "Menjaga konektivitas antar-gedung skala luas tetap stabil tanpa gangguan selama kegiatan dinas nasional dan event kedinasan penting.",
    impact: "Menjamin kontinuitas layanan jaringan selama periode Mei–Desember 2024 tanpa insiden downtime major pada kegiatan dinas.",
    solutions: [
      "Melakukan preventive maintenance rutin pada distribusi Fiber Optic (FO) serta pemantauan latensi real-time.",
      "Optimalisasi beban trafik pada Core/Distribution Switch (HP/Ruijie) dan penataan sistem Wi-Fi multi-AP.",
      "Menyiapkan infrastruktur khusus event-ready dengan alokasi bandwidth terprioritas."
    ],
    techStack: ["Core Switch HP/Ruijie", "Fiber Optic", "Enterprise Wi-Fi", "Firewall"],
    github: "",
    image: ""
  },
  {
    id: "cyaneum-ncm",
    title: "Automated Multi-Vendor Network Backup",
    company: "Cyaneum NCM",
    category: "Network Automation & Security",
    type: "Personal Lab & Automation Project",
    description: "Pengembangan sistem terpusat untuk backup otomatis perangkat multi-vendor (MikroTik, HP, Ruijie) menggunakan skrip Python/FastAPI serta integrasi dashboard WireGuard.",
    challenge: "Audit konfigurasi manual dan pemulihan perangkat yang memakan waktu lama saat terjadi kegagalan hardware.",
    impact: "Memotong durasi configuration audit manual dan mempermudah pemulihan perangkat jika terjadi kegagalan hardware.",
    solutions: [
      "Pemanfaatan Celery task queue & Redis untuk menjalankan jadwal ekstraksi konfigurasi perangkat secara berkala.",
      "Integrasi Notifikasi Telegram Bot untuk memberikan alert status sukses/gagal backup secara real-time.",
      "Kontainerisasi stack aplikasi menggunakan Docker Compose di lingkungan Ubuntu Server."
    ],
    techStack: ["Python", "FastAPI", "Docker", "WireGuard", "Telegram Bot API", "Redis", "Celery"],
    github: "https://github.com/Rzkyads/NCM-Network-Configuration-Management-.git",
    image: "/projects/cyaneum-ncm.png"
  }
];

export const experiences = [
  {
    period: "Januari 2025 – Sekarang",
    company: "PT. VARNION TECHNOLOGY SEMESTA",
    location: "Jakarta Selatan",
    role: "Network Deployment & Activation Engineer | Project Manager BFD",
    points: [
      "Memimpin perencanaan & implementasi BFD pada BGP menggunakan MikroTik untuk otomatisasi failover link utama ke backup link.",
      "Mengelola provisioning, routing, switching, VLAN, NAT, firewall, dan alokasi trafik untuk 500+ Klien Dedicated & Broadband ISP.",
      "Memantau upstream link, utilisasi bandwidth, dan latensi demi pemenuhan Service Level Agreement (SLA) pelanggan."
    ]
  },
  {
    period: "Mei 2024 – Desember 2024",
    company: "PT. VARNION TECHNOLOGY SEMESTA (EOS Akademi Kepolisian Semarang)",
    location: "Semarang",
    role: "Network Infrastructure Engineer",
    points: [
      "Bertanggung jawab atas operasional Core Router, Switch, Firewall, Wi-Fi Enterprise, IP CCTV, dan backbone Fiber Optic.",
      "Melakukan maintenance preventif jaringan FO antar-gedung dan menjaga latensi koneksi internal serta internet.",
      "Memimpin kesiapan infrastruktur IT untuk mendukung acara dinas penting di lingkungan Akpol Semarang."
    ]
  },
  {
    period: "September 2023 – Januari 2024",
    company: "TELKOM UNIVERSITY PURWOKERTO",
    location: "Purwokerto",
    role: "Asisten Laboratorium Jaringan Komputer",
    points: [
      "Mengajar praktikum dasar jaringan, VLSM/FLSM, routing Cisco, dan keamanan jaringan menggunakan simulator GNS3."
    ]
  },
  {
    period: "Februari 2023 – Juli 2023",
    company: "PT SYNNEX METRODATA INDONESIA",
    location: "Jakarta Barat",
    role: "Network Security Operation Center (Cyber Blue Team) - Studi Independen",
    points: [
      "Menyelesaikan sertifikasi dan praktikum CND & ECIH untuk simulasi deteksi, analisis SIEM, dan mitigasi serangan siber."
    ]
  },
  {
    period: "Agustus 2022 – Desember 2022",
    company: "KOMINFO",
    location: "Jakarta Pusat",
    role: "Cybersecurity Analyst - Studi Independen",
    points: [
      "Evaluasi keamanan jaringan enterprise skala menengah dan pemantauan alert SIEM untuk mitigasi insiden."
    ]
  }
];

export const education = {
  degree: "Bachelor of Computer Science (Teknik Informatika)",
  institution: "Telkom University Purwokerto",
  period: "Sep 2020 – Des 2024",
  gpa: "3.92 / 4.00 (Sangat Memuaskan)",
  highlights: [
    "Finalis GEMASTIK Cabang Cybersecurity.",
    "Instruktur Pelatihan Junior Network Administrator."
  ],
  socialProjects: [
    {
      title: "Pengabdian Masyarakat (IPTEK & Desa Muntang)",
      description: "Merancang proposal dan mengamankan pendanaan proyek literasi digital masyarakat, serta memberikan pelatihan dasar jaringan dan konfigurasi internet aman."
    }
  ]
};
