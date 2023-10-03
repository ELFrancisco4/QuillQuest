const SidePanel = () => {
  return (
    <div className="side_panel">
      <div className="recommended_topics">
        <h2>Recommended Topics</h2>
        <ul>
          <li>Hacking</li>
          <li>Cyber Security</li>
          <li>Red Teaming</li>
        </ul>
        <a href="#">See more topics</a>
      </div>

      <div className="recently_saved">
        <h2>Recently Saved</h2>
        <ul>
          <li>Article 1</li>
          <li>Article 2</li>
          <li>Article 3</li>
          <li>Article 4</li>
        </ul>
      </div>
    </div>
  );
};

export default SidePanel;
