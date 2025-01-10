import { GrMicrophone } from "react-icons/gr";
import { HiOutlinePresentationChartLine } from "react-icons/hi2";
import { LuGraduationCap } from "react-icons/lu";
import { TbChecklist } from "react-icons/tb";
const Categories_Content = [
  {
    title: "Master Spoken English",
    description: `Speak English fluently and confidently in real-life situations. Our Spoken English course focuses on pronunciation, conversation skills, and everyday communication. Perfect for beginners and advanced learners alike!`,
    Key_Features: [
      "Interactive speaking practice",
      "Focus on pronunciation and accent",
      "Real-life conversation scenarios",
      "Personalized feedback from expert trainers",
    ],
    CTA: "Start Speaking Confidently Today!",
    icon: GrMicrophone,
    alt: "Students practicing Spoken English at Bigwigs Academy",
  },
  {
    title: "Excel in Business English",
    description: `Boost your career with our Business English course. Learn to write professional emails, deliver presentations, and communicate effectively in the workplace. Ideal for professionals and job seekers.`,
    Key_Features: [
      "Business communication skills",
      "Email and report writing",
      "Presentation and negotiation techniques",
      "Industry-specific vocabulary",
    ],
    CTA: "Advance Your Career Now!",
    icon: HiOutlinePresentationChartLine,
    alt: "Business professionals communicating in English",
  },
  {
    title: "Ace the IELTS Exam",
    description: `Prepare for the IELTS exam with our comprehensive course. Master all four sections—Listening, Reading, Writing, and Speaking—and achieve your dream band score with expert guidance.`,
    Key_Features: [
      "Full-length practice tests",
      "Tips and strategies for each section",
      "Personalized coaching",
      "Access to premium study materials",
    ],
    CTA: "Achieve Your IELTS Goals",
    icon: LuGraduationCap,
    alt: "Student preparing for the IELTS exam",
  },
  {
    title: "Score High in PTE",
    description: `Get ready for the PTE exam with our proven preparation course. Learn time management, question-solving techniques, and scoring strategies to achieve your desired result.`,
    Key_Features: [
      "Mock tests and practice questions",
      "Focus on all PTE sections",
      "Expert tips for high scores",
      "Flexible learning options",
    ],
    CTA: "Start Your PTE Preparation Today!",
    icon: TbChecklist,
    alt: "Student taking the PTE exam",
  },
];

/*
------------------------------------------------------------
| [Logo]                                                   |
| Home | About Us | Courses ▼ | Testimonials | Blog | Contact Us |
| [Enroll Now] [Book a Free Demo] [Social Media Icons]      |
------------------------------------------------------------ */
import { AiOutlineHome } from "react-icons/ai";
import { LiaInfoCircleSolid } from "react-icons/lia";
import { TiStarOutline } from "react-icons/ti";
import { HiOutlinePhone } from "react-icons/hi";
const NavbarItems = [
  { icon: AiOutlineHome, name: "Home", link: "/" },
  { icon: LiaInfoCircleSolid, name: "About Us", link: "/about" },
  { icon: LuGraduationCap, name: "Courses", link: "/courses" },
  { icon: TiStarOutline, name: "Testimonals", link: "/testimonals" },
  { icon: HiOutlinePhone, name: "Contact Us", link: "/contact" },
];

const reviews = [
  "marquee/4797.jpg",
  "marquee/18011.jpg",
  "marquee/26843.jpg",
  "marquee/53807.jpg",
  "marquee/77463.jpg",
  "marquee/2147657078.jpg",
  "marquee/2148225295.jpg",
  "marquee/2148522213.jpg",
  "marquee/2149455156.jpg",
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const SplashScreenHeadlines = [
  {
    headline: "Be Your Best in IELTS and PTE",
    subheadline:
      "Achieve your dream scores and unlock global opportunities with our expert-led preparation.",
  },
  {
    headline: "Your Pathway to Success: IELTS and PTE",
    subheadline: "Join the academy that helps you excel in both IELTS and PTE.",
  },
  {
    headline: "Dream Big, Score High: Excel in IELTS and PTE",
    subheadline:
      "Prepare with the best and achieve your academic and professional goals.",
  },
  {
    headline: "Unlock Your Global Dreams with IELTS and PTE",
    subheadline:
      "Achieve your desired scores and open doors to top universities and careers worldwide.",
  },
  {
    headline: "From Preparation to Perfection: Conquer IELTS and PTE",
    subheadline:
      "Get expert guidance, practice tests, and strategies to succeed in both exams.",
  },
];

export {
  Categories_Content,
  NavbarItems,
  firstRow,
  secondRow,
  SplashScreenHeadlines,
};
