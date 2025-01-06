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



export { Categories_Content };
