import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AssignmentEditor() {
  const navigate = useNavigate();
  const [assignment, setAssignment] = useState({
    name: "A1 - ENV + HTML",
    description:
      "The assignment is available online. Submit a link to the landing page of your web application running on Netlify.",
    points: 100,
    group: "ASSIGNMENTS",
    displayGradeAs: "Percentage",
    submissionType: "Online",
    assignTo: "Everyone",
    dueDate: "2024-05-13",
    availableFrom: "2024-05-06",
    availableUntil: "2024-05-20",
  });

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <h2>Assignment Editor</h2>
      <hr />
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label fw-bold">
          Assignment Name
        </label>
        <input
          id="wd-name"
          className="form-control"
          value={assignment.name}
          onChange={(e) => setAssignment({ ...assignment, name: e.target.value })}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="wd-description" className="form-label fw-bold">
          Description
        </label>
        <textarea
          id="wd-description"
          className="form-control"
          rows={4}
          value={assignment.description}
          onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="wd-points" className="form-label fw-bold">Points</label>
        <input
          id="wd-points"
          type="number"
          className="form-control"
          value={assignment.points}
          onChange={(e) => setAssignment({ ...assignment, points: Number(e.target.value) })}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="wd-group" className="form-label fw-bold">Assignment Group</label>
        <select
          id="wd-group"
          className="form-select"
          value={assignment.group}
          onChange={(e) => setAssignment({ ...assignment, group: e.target.value })}
        >
          <option>ASSIGNMENTS</option>
          <option>QUIZZES</option>
          <option>EXAMS</option>
          <option>PROJECT</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="wd-display-grade-as" className="form-label fw-bold">Display Grade As</label>
        <select
          id="wd-display-grade-as"
          className="form-select"
          value={assignment.displayGradeAs}
          onChange={(e) => setAssignment({ ...assignment, displayGradeAs: e.target.value })}
        >
          <option>Percentage</option>
          <option>Complete/Incomplete</option>
          <option>Points</option>
        </select>
      </div>


      <div className="mb-3">
        <label htmlFor="wd-submission-type" className="form-label fw-bold">Submission Type</label>
        <select
          id="wd-submission-type"
          className="form-select"
          value={assignment.submissionType}
          onChange={(e) => setAssignment({ ...assignment, submissionType: e.target.value })}
        >
          <option>Online</option>
          <option>On Paper</option>
          <option>No Submission</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label fw-bold">Online Entry Options</label>
        <div className="form-check">
          <input id="wd-text-entry" type="checkbox" className="form-check-input" />
          <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
        </div>
        <div className="form-check">
          <input id="wd-website-url" type="checkbox" className="form-check-input" />
          <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
        </div>
        <div className="form-check">
          <input id="wd-media-recordings" type="checkbox" className="form-check-input" />
          <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
        </div>
        <div className="form-check">
          <input id="wd-student-annotation" type="checkbox" className="form-check-input" />
          <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
        </div>
        <div className="form-check">
          <input id="wd-file-upload" type="checkbox" className="form-check-input" />
          <label htmlFor="wd-file-upload" className="form-check-label">File Uploads</label>
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="wd-assign-to" className="form-label fw-bold">Assign To</label>
        <input
          id="wd-assign-to"
          className="form-control"
          value={assignment.assignTo}
          onChange={(e) => setAssignment({ ...assignment, assignTo: e.target.value })}
        />
      </div>

      <div className="row">
        <div className="col-md-4 mb-3">
          <label htmlFor="wd-due-date" className="form-label fw-bold">Due Date</label>
          <input
            type="date"
            id="wd-due-date"
            className="form-control"
            value={assignment.dueDate}
            onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })}
          />
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="wd-available-from" className="form-label fw-bold">Available From</label>
          <input
            type="date"
            id="wd-available-from"
            className="form-control"
            value={assignment.availableFrom}
            onChange={(e) => setAssignment({ ...assignment, availableFrom: e.target.value })}
          />
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="wd-available-until" className="form-label fw-bold">Until</label>
          <input
            type="date"
            id="wd-available-until"
            className="form-control"
            value={assignment.availableUntil}
            onChange={(e) => setAssignment({ ...assignment, availableUntil: e.target.value })}
          />
        </div>
      </div>

      <div className="d-flex justify-content-between">
        <button className="btn btn-secondary" onClick={() => navigate(-1)}>Cancel</button>
        <button className="btn btn-success">Save</button>
      </div>
    </div>
  );
}
