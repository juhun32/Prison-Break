import React from "react";

const Prisonernum = () => {
  return (
    <div>
      <iframe
        title="Massachusetts spends more than twice on each imprisoned person than does any other state."
        aria-label="Map"
        id="datawrapper-chart-79G0F"
        src="https://datawrapper.dwcdn.net/79G0F/9/"
        scrolling="no"
        frameBorder="0"
        style={{ width: "100%", border: "none" }} // Ensure it occupies full width
        height="609"
        data-external="1"
      ></iframe>
      <script type="text/javascript">
        {
          '!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();'
        }
      </script>
    </div>
  );
};

export default Prisonernum;
