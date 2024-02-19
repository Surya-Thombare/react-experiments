import { CSVLink, CSVDownload } from "react-csv";

const csvData = [
  ["firstname", "lastname", "email"],
  ["Ahmed", "Tomi", "ah@smthing.co.com"],
  ["Raed", "Labes", "rl@smthing.co.com"],
  ["Yezzi", "Min l3b", "ymin@cocococo.com"],
];

const ExportToExcel = () => {
  return (
    <>
    <h1>Export to Excel</h1>
      <CSVLink data={csvData}>Download me</CSVLink>
     
      <CSVDownload data={csvData} target="_blank" />
    </>
  );
};

export default ExportToExcel;
