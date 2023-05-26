import React from "react";

export type AvatarProps = {
  /** The first name of the user */
  firstName: string;
  /** The last name of the user */
  lastName: string;
};

/** Display of the initials of the user */
export const Avatar: React.FC<AvatarProps> = ({ firstName, lastName }) => {
  return (
    <div
      style={{ width: "3rem", height: "3rem" }}
      className="d-flex justify-content-center align-items-center p-1 pe-2 bg-primary border border-white rounded-circle"
    >
      <div className="text-white fw-bold">
        {firstName.toUpperCase().at(0)}
        {lastName.toUpperCase().at(0)}
      </div>
    </div>
  );
};
