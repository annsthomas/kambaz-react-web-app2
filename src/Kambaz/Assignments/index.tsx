import { Link } from "react-router-dom";
import { FaSearch, FaPlus } from "react-icons/fa";
import "./styles.css";

export default function Assignments() {
  return (
    <div id="wd-assignments" className="p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group w-50">
          <span className="input-group-text">
            <FaSearch />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search for Assignments"
            id="wd-search-assignment"
          />
        </div>
        <div>
          <button className="btn btn-danger me-2">
            <FaPlus className="me-1" /> Group
          </button>
          <button className="btn btn-danger">
            <FaPlus className="me-1" /> Assignment
          </button>
        </div>
      </div>

      <h3 id="wd-assignments-title" className="d-flex align-items-center justify-content-between border-bottom pb-2">
        ASSIGNMENTS <small className="text-muted">40% of Total</small>
        <button className="btn btn-outline-secondary">
          <FaPlus />
        </button>
      </h3>

      <ul className="list-group mt-3">
        <li className="list-group-item">
          <Link to="/Kambaz/Courses/1234/Assignments/123" className="text-decoration-none fw-bold">
            A1 - ENV + HTML
          </Link>
          <br />
          <small className="text-muted">Multiple Modules | Not available until May 6 at 12:00am | Due May 13 at 11:59pm | 100 pts</small>
        </li>
        <li className="list-group-item">
          <Link to="/Kambaz/Courses/1234/Assignments/124" className="text-decoration-none fw-bold">
            A2 - CSS + BOOTSTRAP
          </Link>
          <br />
          <small className="text-muted">Multiple Modules | Not available until May 13 at 12:00am | Due May 20 at 11:59pm | 100 pts</small>
        </li>
        <li className="list-group-item">
          <Link to="/Kambaz/Courses/1234/Assignments/125" className="text-decoration-none fw-bold">
            A3 - JAVASCRIPT + REACT
          </Link>
          <br />
          <small className="text-muted">Multiple Modules | Not available until May 20 at 12:00am | Due May 27 at 11:59pm | 100 pts</small>
        </li>
      </ul>
    </div>
  );
}
