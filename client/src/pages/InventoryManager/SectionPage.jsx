import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "./Sidebar";
import "./SectionPage.css";

function SectionPage({ title, description, columns, rows }) {
  return (
    <div className="inventory-section-page">
      <Navbar />
      <div className="inventory-section-layout">
        <Sidebar />
        <main className="inventory-section-main">
          <header className="inventory-section-header">
            <h1>{title}</h1>
            <p>{description}</p>
          </header>

          <section className="inventory-section-card">
            <table className="inventory-section-table">
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
