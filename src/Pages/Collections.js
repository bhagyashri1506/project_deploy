import React from "react";
import { PiSquaresFour } from "react-icons/pi";

import { Outlet} from 'react-router-dom';
const Collections = () => {
  return (
    <main class="layout-main flex-1 font-space">
      <a
        href="/collection"
        class="no-underline text-[#00000073] text-sm block mb-3"
      >
        <span className="flex">
          <i className="icon-square">
            <PiSquaresFour />
          </i>
          Collections
        </span>
      </a>
     <Outlet/>
    </main>
  );
};

export default Collections;
