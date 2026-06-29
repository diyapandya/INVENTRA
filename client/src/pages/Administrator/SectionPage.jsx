import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "./Sidebar";
import "./SectionPage.css";

function SectionPage({ title, description, columns, rows }) {
  return (
    <div className="administrator-section-page">
      <Navbar />
      <div className="administrator-section-layout">
        <Sidebar />
        <main className="administrator-section-main">
          <header className="administrator-section-header">
            <h1>{title}</h1>
            <p>{description}</p>
          </header>

          <section className="administrator-section-card">
            <table className="administrator-section-table">
              <thead>
                <tr>
                  {columns.map((column) => (
                    <th key={column}>{column}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.join("-")}>
                    {row.map((cell) => (
                      <td key={cell}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </div>
  );
}

export default SectionPage;
