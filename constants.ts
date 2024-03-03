import { Code, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react";

export const MAX_FREE_COUNTS = 5;

export const tools = [
  {
    label: 'Respostas rápidas e precisas às suas dúvidas, além de sugestões de leitura e reflexão para enriquecer sua compreensão das Escrituras.',
    icon: MessageSquare,
    href: '/conversation',
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: 'Crie artes incríveis de forma simples e prática, com opções personalizadas para expressar sua criatividade e inspiração visual.',
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: '/image',
  },
  //{
  //   label: ' Produza vídeos customizados, combinando elementos visuais para expressar sua criatividade.',
  //   icon: VideoIcon,
  //   color: "text-orange-700",
  //   bgColor: "bg-orange-700/10",
  //   href: '/video',
  // },
  // {
  //   label: 'Crie trilhas sonoras únicas e efeitos sonoros personalizados para enriquecer suas produções audiovisuais.',
  //   icon: Music,
  //   href: '/music',
  //   color: "text-emerald-500",
  //   bgColor: "bg-emerald-500/10",
  // },
  // {
  //   label: 'Desenvolva código-fonte automaticamente, acelerando o processo de programação com geração de scripts eficientes.',
  //   icon: Code,
  //   color: "text-green-700",
  //   bgColor: "bg-green-700/10",
  //   href: '/code',
  // },
];
