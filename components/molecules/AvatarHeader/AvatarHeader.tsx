import { useState } from "react";
import { Avatar, AvatarProps } from "../../atoms/Avatar/Avatar";
import { ChevronIcon } from "../../icons";
import clsx from "clsx";

type AvatarHeaderProps = AvatarProps & {
  onClick?: () => void;
};

export const AvatarHeader: React.FC<AvatarHeaderProps> = ({
  firstName,
  lastName,
  onClick,
}) => {
  const [_isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!_isOpen);
    onClick && onClick();
    console.log("Test");
  };

  return (
    <div className="d-flex align-items-center" onClick={handleClick}>
      <div className="me-2 fw-medium">
        {firstName} {lastName}
      </div>
      <Avatar firstName={firstName} lastName={lastName} />
      <ChevronIcon
        style={
          _isOpen
            ? { transform: "rotate(-180deg)", transition: ".3s ease-in-out" }
            : { transition: ".3s ease-in-out" }
        }
      />
    </div>
  );
};
