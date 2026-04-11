

export type Testimonial = {
  id: number;
  name: string;
  text: string;
  image: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "James Mitchell",
    text: "Unipixer developed a real-time tracking mobile app integrated with our TMS and route optimization system. Driver experience improved greatly, delivery errors decreased, and their team handled complex APIs and testing efficiently.",
    image: "/images/testi/t1.png",
  },
  {
    id: 2,
    name: "Leila Ahmed",
    text: "We approached Unipixer with an early LMS idea. They helped design the course editor, quizzes, answare, sheet, and teacher dashboard. When users felt confused, their team improved flows quickly and continues supporting updates.",
    image: "/images/testi/t2.png",
  },
  {
    id: 3,
    name: "Emma Thompson",
    text: "Unipixer redesigned our mobile store application after major checkout issues. They simplified navigation, optimized performance, and managed multiple revisions smoothly. Since launch, the platform runs reliably and user satisfaction improved.",
    image: "/images/testi/t3.png",
  },
  {
    id: 4,
    name: "Rohan Mehta",
    text: "Unipixer built our secure payments mobile app with authentication, KYC processes, and encrypted data pipelines. The system now handles heavy traffic smoothly, improves payment success rates, and passed internal security reviews.",
    image: "/images/testi/t4.png",
  },
  {
    id: 5,
    name: "Dr. Samuel Khan",
    text: "We needed a secure telehealth and patient management mobile system. Unipixer implemented role-based access, strong encryption, offline sync, and a clinician dashboard that significantly reduced administrative workload for staff.",
    image: "/images/testi/t5.png",
  },
];