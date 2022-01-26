import React from "react";
import { connect } from "react-redux";
import MenuItem from "../menu-item/menu-item.component";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import { useNavigate } from "react-router-dom";

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export const DirectoryComponent = connect(mapStateToProps)(
  ({ sections, match }) => {
    const navigate = useNavigate();
    return (
      <div className="directory-menu">
        {sections.map((s) => (
          <MenuItem
            key={s.id}
            title={s.title}
            id={s.id}
            imageUrl={s.imageUrl}
            size={s.size}
            onCLickHandler={() => {
              navigate("collection-preview/" + s.title, { replace: true });
            }}
          />
        ))}
      </div>
    );
  }
);
