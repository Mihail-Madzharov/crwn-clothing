import React from "react";
import { connect } from "react-redux";
import MenuItem from "../menu-item/menu-item.component";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export const DirectoryComponent = connect(mapStateToProps)(({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map((s) => (
        <MenuItem
          key={s.id}
          title={s.title}
          imageUrl={s.imageUrl}
        size={s.size}
        />
      ))}
    </div>
  );
});
