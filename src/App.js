import React, { useState } from "react";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showProfileModal, setShowProfileModal] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const toggleCourseView = (course) => {
    if (selectedCourse === course) {
      setSelectedCourse(null);
    } else {
      setSelectedCourse(course);
    }
  };

  const openProfileModal = () => {
    setShowProfileModal(true);
  };

  const closeProfileModal = () => {
    setShowProfileModal(false);
  };

  return (
    <div className="app">
      {/* Header Section */}
      <header className="header">
        <div className="header-info">
          <img src="profile.jpg" alt="Profile" className="profile-img" />
          <div>
            <h1>Welcome Sherie!</h1>
            <p>BSIT-3</p>
          </div>
        </div>
        {/* Profile Button */}
        <button className="profile-btn" onClick={openProfileModal}>
          Profile
        </button>
      </header>

      {/* Main Content */}
      <main className="main">
        {activeTab === "home" && (
          <>
            {/* GPA Section */}
            <div className="card gpa-card">
              <h2>Current GPA</h2>
              <p className="gpa">1.45</p>
              <button className="btn">Evaluation</button>
            </div>

            {/* Courses Section */}
            <div className="card courses-card">
              <h2>My Courses:</h2>
              {/* Math 101 */}
              <div className="course">
                <img src="math101.png" alt="Math 101" />
                <div>
                  <h3>MATH 101</h3>
                  <p>Section: 41011</p>
                  <p>Description: Food Business Analytics</p>
                  <p>Faculty: Sir Sammy</p>
                </div>
                <button
                  className="view-btn"
                  onClick={() => toggleCourseView("MATH 101")}
                >
                  {selectedCourse === "MATH 101" ? "Hide Grades" : "View Grades"}
                </button>
              </div>

              {/* Net 101 */}
              <div className="course">
                <img src="net101.png" alt="NET 101" />
                <div>
                  <h3>NET 101</h3>
                  <p>Section: 41011</p>
                  <p>Description: Food Business Analytics</p>
                  <p>Faculty: Rochelle</p>
                </div>
                <button
                  className="view-btn"
                  onClick={() => toggleCourseView("NET 101")}
                >
                  {selectedCourse === "NET 101" ? "Hide Grades" : "View Grades"}
                </button>
              </div>
            </div>
          </>
        )}

        {activeTab === "notification" && (
          <div className="card notification-card">
            <h2>Notifications</h2>
            <p>No new notifications at the moment!</p>
          </div>
        )}

        {activeTab === "settings" && (
          <div className="card settings-card">
            <h2>Settings</h2>
            <p>Manage your account settings here.</p>
          </div>
        )}
      </main>

      {/* Footer Navigation */}
      <footer className="footer">
        <button
          className={activeTab === "home" ? "active" : ""}
          onClick={() => handleTabChange("home")}
        >
          Home
        </button>
        <button
          className={activeTab === "notification" ? "active" : ""}
          onClick={() => handleTabChange("notification")}
        >
          Notification
        </button>
        <button
          className={activeTab === "settings" ? "active" : ""}
          onClick={() => handleTabChange("settings")}
        >
          Settings
        </button>
      </footer>

      {/* Profile Modal */}
      {showProfileModal && (
        <div className="modal-overlay">
          <div className="profile-modal">
            <h2>User Profile</h2>
            <p>Name: Sherie</p>
            <p>Course: BSIT-3</p>
            <p>Institution: Iligan Medical Center</p>
            <button className="close-btn" onClick={closeProfileModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
