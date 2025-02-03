import { Routes, Route, Link,Navigate } from "react-router-dom";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
export default function Kambaz() {
  return (
    <div id="wd-kambaz">
      <table>
        <tbody>
          <tr>
            <td valign="top">
              <KambazNavigation />
            </td>
            <td valign="top" id="wd-kambaz-wd-main-content-offset" className="wd-kambaz-wd-main-content-offset">
            <div id="wd-account-navigation" className="list-group">
            <Link to="/Labs" className="list-group-item list-group-item-action">
            Go to Lab Exercises
            </Link>
            </div>
              <Routes>
                <Route path="/" element={<Navigate to="/Kambaz/Account" />} />
                <Route path="/Account/*" element={<Account />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="Courses/:cid/*" element={<Courses />} />
              </Routes>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
