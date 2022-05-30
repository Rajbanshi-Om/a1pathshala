import { HomeFilled } from "@ant-design/icons";
import { SignalFilled } from "@ant-design/icons";
import { CloudFilled } from "@ant-design/icons";
import { ProfileFilled } from "@ant-design/icons";
import { BankFilled } from "@ant-design/icons";
import { CiCircleFilled } from "@ant-design/icons";
import { MehFilled } from "@ant-design/icons";
import { CalendarFilled } from "@ant-design/icons";
import { HddFilled } from "@ant-design/icons";
import { ReadFilled } from "@ant-design/icons";
import { ReconciliationFilled } from "@ant-design/icons";
import { ScheduleFilled } from "@ant-design/icons";
import { FolderFilled } from "@ant-design/icons";
import { DollarCircleFilled } from "@ant-design/icons";
import { DatabaseFilled } from "@ant-design/icons";
import { PayCircleFilled } from "@ant-design/icons";
import { LayoutFilled } from "@ant-design/icons";
import { MessageFilled } from "@ant-design/icons";
import { SkinFilled } from "@ant-design/icons";
import { CarFilled } from "@ant-design/icons";
import { ContainerFilled } from "@ant-design/icons";
import { FileFilled } from "@ant-design/icons";
import { ApiFilled } from "@ant-design/icons";
import { CarryOutFilled } from "@ant-design/icons";
import { SlidersFilled } from "@ant-design/icons";
import { SettingFilled } from "@ant-design/icons";
import { BookFilled } from "@ant-design/icons";

export const sideBarData = [
  {
    name: "Dashboard",
    icon: HomeFilled,
  },
  {
    name: "Online Class",
    icon: SignalFilled,
    subMenu: ["Class List", "Active Classes ", "History", "Report"],
  },
  {
    name: "Online Examinations",
    icon: CloudFilled,
    subMenu: ["Add Questions", "View Online Exams", "Create Exam"],
  },

  {
    name: "Attendence",
    icon: ProfileFilled,
    subMenu: ["Attendence", "Report"],
  },
  {
    name: "Account",
    icon: BankFilled,
    subMenu: [
      "Expenses",
      "Income",
      "Generate Cash Receipt",
      "Add Fee Types",
      "Opening Balance",
      "Generate Bill",
      "Day Book",
      "Item",
      "vendor",
      "Stock",
    ],
  },
  {
    name: "Student",
    icon: CiCircleFilled,
    subMenu: [
      "Student Category",
      "All Students",

      "Manage Roll Number",
      ,
      "Parents",
    ],
  },
  {
    name: "Teacher",
    icon: MehFilled,
    subMenu: ["All Teachers"],
  },
  {
    name: "Daily Class Routine",
    icon: CalendarFilled,
    subMenu: [
      "Student Routine",
      // "Create Student Routine",
      "Teacher Routine",
      // "Create Teacher Routine",
    ],
  },
  {
    name: "Classes",
    icon: HddFilled,
    subMenu: ["All Classes",],
  },
  {
    name: "Subjects",
    icon: ReadFilled,
    subMenu: ["All Subjects"],
  },
  {
    name: "Exams And results",
    icon: ReconciliationFilled,
    subMenu: [
      "View Exam Timetable",
      "Create Exam Timetable",
      "Add Marks",
      "Review/Publish Mark",
    ],
  },
  {
    name: "Lesson Plan",
    icon: ScheduleFilled,
  },
  {
    name: "E-Library",
    icon: FolderFilled,
    // subMenu: ["E-Library"],
  },
  {
    name: "Fee Collection",
    icon: DollarCircleFilled,
  },
  {
    name: "Library",
    icon: DatabaseFilled,
    subMenu: [
      "Books",
      "Book Issue",
      "Rack Block",
      "Reporting",
      "Settings",
    ],
  },
  {
    name: "Payroll",
    icon: PayCircleFilled,
    subMenu: ["Create Payslip", "Payment History", "Payroll Setting"],
  },
  {
    name: "Homework",
    icon: LayoutFilled,
    // subMenu: ["Homeworks", "Homework History", "HomeWork Complain"],
  },
  {
    name: "Message",
    icon: MessageFilled,
    subMenu: [
      "Send ",
      "History",
      "Settings",
    ],
  },
  {
    name: "Staff",
    icon: SkinFilled,
  },
  {
    name: "School Buses",
    icon: CarFilled,
    subMenu: ["Track & History", "Update Buses"],
  },
  {
    name: "Hostel",
    icon: ContainerFilled,
    subMenu: ["Hostel Information", "Assign Hostel"],
  },
  {
    name: "Generate",
    icon: FileFilled,
    subMenu: [
      "Admit Card",
      "Id Card",
      "Bus Pass",
      "Masks Ledger",
      "Masksheet",
      "Character Certificate",
      "Transfer Certificate",
      "Fee|Dues Receipts",
    ],
  },
  {
    name: "Export",
    icon: ApiFilled,
    subMenu: [
      "Teacher Details ",
      "Student Details",
      "Staff Details",
      "Parents Details",
    ],
  },
  {
    name: "Import",
    icon: CarryOutFilled,
  },
  {
    name: "Manage Leave",
    icon: BookFilled,
    subMenu: ["Leave History ", "Leave Request "],
  },
  {
    name: "Webiste Manager",
    icon: SlidersFilled,
    subMenu: [
      "Menu Settings ",
      "Banner",
      "Introduction",
      "Director Message",
      "Principle Message",
      "Events",
      "News",
      "Testimonial",
      "Alumuni",
      "Facility",
      "Admission",
      "Download",
      "School Gallery",
      "Add Event's Picture",
      "Calender",
      "Notices",
      "Carrer",
      "Modal",
    ],
  },
  {
    name: "Settings",
    icon: SettingFilled,
    subMenu: [
      "Theme Color ",
      "Login Request",
      "Academic",
      "Exam Format",
      "Role Permission",
    ],
  },
];
