import { Code, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react";

export const MAX_FREE_COUNTS = 5;

export const tools = [
  {
    label: 'Explore um ambiente de conversação dinâmica através de um prompt de texto generativo, onde suas interações moldam a experiência de forma única.',
    icon: MessageSquare,
    href: '/conversation',
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: 'Crie imagens personalizadas com facilidade, ajustando elementos visuais conforme suas preferências.',
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: '/image',
  },
  {
    label: ' Produza vídeos customizados, combinando elementos visuais para expressar sua criatividade.',
    icon: VideoIcon,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: '/video',
  },
  {
    label: 'Crie trilhas sonoras únicas e efeitos sonoros personalizados para enriquecer suas produções audiovisuais.',
    icon: Music,
    href: '/music',
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: 'Desenvolva código-fonte automaticamente, acelerando o processo de programação com geração de scripts eficientes.',
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: '/code',
  },
];
