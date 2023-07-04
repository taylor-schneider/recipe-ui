import './Version.css';

function Version(version_number) {
  return (
    <div id="version" className="version">
      <span>{version_number}</span>
    </div>
  );
}

export default Version;
