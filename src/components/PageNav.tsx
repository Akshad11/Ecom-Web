interface MyPageNav {
  LocString: string[];
}

export default function PageNav({ LocString }: MyPageNav) {
  const NavtoHome = () => {
    console.log("Navigating to home");
  };

  return (
    <div className="flex justify-start gap-2 pl-5 py-5 text-xl items-center">
      {LocString.map((item, index) => (
        <p key={index} onClick={NavtoHome}>
          {index == 0 ? null : "/ "} {item}
        </p>
      ))}
    </div>
  );
}
