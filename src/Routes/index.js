import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import AttendencePage from "../pages/Attendence";
import AttendenceReportPage from "../pages/Attendence/AttendenceReport";
import Dashboard from "../pages/Dashboard";
import NotFoundPage from "../pages/NotFoundPage";
import ActiveClassesPage from "../pages/OnlineClass/ActiveClasses";
import ClassListPage from "../pages/OnlineClass/ClassList";
import CreateExam from "../pages/OnlineExam/CreateExam";
import AddQuestions from "../pages/OnlineExam/AddQuestions";
import Parents from "../pages/Parents";
import SignIn from "../pages/SignIn";
import AllStudents from "../pages/Student/AllStudents";
import TeacherPage from "../pages/Teacher";
import ExamList from "../pages/OnlineExam/ExamList";
import AddIndividualQuestions from "../pages/OnlineExam/AddQuestions/AddIndividualQuestion";
import TeacherRoutinePage from "../pages/DaillyClassRoutine/TeacherRoutine";
import StudentRoutinePage from "../pages/DaillyClassRoutine/StudentRoutine";
import AllSubjects from "../pages/Subjects/AllSubjects";
import ViewExamTimetable from "../pages/ExamsAndResults/ViewExamTimetable";
import ViewIndividualExam from "../pages/ExamsAndResults/ViewExamTimetable/ViewIndividualExam";
import ViewIndividualClassExam from "../pages/ExamsAndResults/ViewExamTimetable/ViewIndividualClassExam";
import CreateExamTimetable from "../pages/ExamsAndResults/CreateExamTimetable";
import ReviewPublishMarks from "../pages/ExamsAndResults/ReviewPublishMarks";
import Demo from "../pages/ExamsAndResults/AddMarks";
import AllClassListPage from "../pages/ClassesList/AllClasses";
import ClassWithId from "../pages/ClassesList/SingleClass";
import Lesson from "../pages/LessonPlan";
import ElibraryPage from "../pages/E-Library";
import ElibraryWithClassPage from "../pages/E-Library/ElibraryWithClass";
import LibrarySettingsPage from "../pages/BookLibrary/LibrarySettings";
import PayrollSetting from "../pages/Payroll/PayrollSetting";
import PaymentHistory from "../pages/Payroll/PaymentHistory";
import CreatePayslip from "../pages/Payroll/CreatePayslip";
import LibraryReportingPage from "../pages/BookLibrary/Reporting/Index";
import BookIssuePage from "../pages/BookLibrary/BookIssue";
import BookPage from "../pages/BookLibrary/ViewBook";
import RackPage from "../pages/BookLibrary/Rack";
import ClassesHistoryPage from "../pages/OnlineClass/History";
import ProfilePage from "../pages/Profile";
import FeeCollectionPage from "../pages/FeeCollection/Collection";
import CollectByIdPage from "../pages/FeeCollection/CollectById";
import Ledger from "../pages/Payroll/CreatePayslip/Ledger";
import Expenses from "../pages/Account/Expenses/Index";
import Income from "../pages/Account/Income/Index";
import GenerateCashReceipt from "../pages/Account/GenerateCashReciept";
import StatementPage from "../pages/FeeCollection/Statement";
import InvoicePage from "../pages/FeeCollection/Invoice";
import AddFeeTypes from "../pages/Account/AddFeeTypes";
import Item from "../pages/Account/Item";
import Vendor from "../pages/Account/Vendor";
import OpeningBalance from "../pages/Account/OpeningBalance/Index";
import HomeworkPage from "../pages/Homework";
import HomeworkReportPage from "../pages/Homework/HomeworkReport";
import DetailViewPage from "../pages/Homework/ViewComponent";
import GenerateBill from "../pages/Account/GenerateBill";
import Stock from "../pages/Account/Stock/Index";
import DayBook from "../pages/Account/DayBook";
import Staff from "../pages/Staff";
import MessageComponentPage from "../pages/Message/MessageForwarding";
import MessageHistoryPage from "../pages/Message/MessageHistory";
import MessageSettingsPage from "../pages/Message/MessageSetting";

const PageRoutes = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="student/allstudents" element={<AllStudents />} />
        <Route path="student/parents" element={<Parents />} />
        <Route path="onlineclass/classlist" element={<ClassListPage />} />
        <Route
          path="onlineclass/activeclasses"
          element={<ActiveClassesPage />}
        />
        <Route path="onlineclass/history" element={<ClassesHistoryPage />} />
        <Route path="attendence/attendence" element={<AttendencePage />} />
        <Route path="attendence/report" element={<AttendenceReportPage />} />
        <Route path="teacher/allteachers" element={<TeacherPage />} />
        <Route
          path="dailyclassroutine/studentroutine"
          element={<StudentRoutinePage />}
        />
        <Route
          path="dailyclassroutine/teacherroutine"
          element={<TeacherRoutinePage />}
        />
        <Route path="onlineexaminations/createexam" element={<CreateExam />} />
        <Route
          path="onlineexaminations/addquestions"
          element={<AddQuestions />}
        />
        <Route
          path="onlineexaminations/viewonlineexams"
          element={<ExamList />}
        />
        <Route
          path="onlineexaminations/addquestion/subject"
          element={<AddIndividualQuestions />}
        />
        <Route path="subjects/allsubjects" element={<AllSubjects />} />
        <Route
          path="examsandresults/viewexamtimetable"
          element={<ViewExamTimetable />}
        />
        <Route
          path="examsandresults/viewexamtimetable/exam"
          element={<ViewIndividualExam />}
        />
        <Route
          path="examsandresults/viewexamtimetable/exam/class"
          element={<ViewIndividualClassExam />}
        />
        <Route
          path="examsandresults/createexamtimetable"
          element={<CreateExamTimetable />}
        />
        <Route
          path="examsandresults/review/publishmark"
          element={<ReviewPublishMarks />}
        />
        <Route path="lessonplan" element={<Lesson />} />
        <Route path="examsandresults/addmarks" element={<Demo />} />
        <Route path="classes/allclasses" element={<AllClassListPage />} />
        <Route path="classes/allclasses/:classId" element={<ClassWithId />} />
        <Route path="e-library" element={<ElibraryPage />} />
        <Route path="e-library/:classId" element={<ElibraryWithClassPage />} />
        <Route path="library/settings" element={<LibrarySettingsPage />} />
        <Route path="payroll/payrollsetting" element={<PayrollSetting />} />
        <Route path="payroll/paymenthistory" element={<PaymentHistory />} />
        <Route path="payroll/createpayslip" element={<CreatePayslip />} />
        <Route path="library/reporting" element={<LibraryReportingPage />} />
        <Route path="library/bookissue" element={<BookIssuePage />} />
        <Route path="library/books" element={<BookPage />} />
        <Route path="library/rackblock" element={<RackPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="account/expenses" element={<Expenses />} />
        <Route path="account/income" element={<Income />} />
        <Route path="account/generatecashreceipt" element={<GenerateCashReceipt />} />
        <Route path="account/addfeetypes" element={<AddFeeTypes />} />
        <Route path="account/item" element={<Item />} />
        <Route path="account/vendor" element={<Vendor />} />
        <Route path="account/openingbalance" element={<OpeningBalance />} />
        <Route path="account/generatebill" element={<GenerateBill />} />
        <Route path="account/stock" element={<Stock />} />
        <Route path="account/daybook" element={<DayBook />} />
        <Route path="feecollection" element={<FeeCollectionPage />} />
        <Route path="feecollection/:feeId" element={<CollectByIdPage />} />
        <Route path="feecollection/statement/:feeId" element={<StatementPage />} />
        <Route path="feecollection/invoice/:feeId" element={<InvoicePage />} />
        <Route path="homework" element={<HomeworkPage  />} />
        <Route path="staff" element={<Staff  />} />
        <Route path="homework/report/:reportId" element={<HomeworkReportPage  />} />
        <Route path="homework/view/:viewId" element={<DetailViewPage  />} />
        <Route path="message/send" element={<MessageComponentPage  />} />
        <Route path="message/history" element={<MessageHistoryPage  />} />
        <Route path="message/settings" element={<MessageSettingsPage  />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="payroll/createpayslip/ledger" element={<Ledger />} />

      <Route path="/signin" element={<SignIn />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default PageRoutes;
