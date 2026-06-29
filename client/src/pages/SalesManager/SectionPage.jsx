import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "./Sidebar";
import "./SectionPage.css";

function SectionPage({ title, description, columns, rows }) {
  return (
    <div className="sales-section-page">
      <Navbar />
      <div className="sales-section-layout">
        <Sidebar />
        <main className="sales-section-main">
          <header className="sales-section-header">
            <h1>{title}</h1>
            <p>{description}</p>
          </header>

          <section className="sales-section-card">
            <table className="sales-section-table">
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
