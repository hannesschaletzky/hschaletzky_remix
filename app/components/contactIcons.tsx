export default function ContactIcons() {
  return (
    <div className="flex justify-center items-center gap-4 w-full my-4">
      <a
        href="https://github.com/hannesschaletzky"
        target="_blank"
        rel="noreferrer"
        title="Icon from https://www.flaticon.com/free-icons/github"
      >
        <img src="/github.png" alt="github" width={50} height={50} />
      </a>
      <a
        href="https://linkedin.com/in/hannesschaletzky/"
        target="_blank"
        rel="noreferrer"
        title="Icon from https://www.flaticon.com/free-icons/linkedin"
      >
        <img src="/linkedin.png" alt="linkedin" width={50} height={50} />
      </a>
    </div>
  );
}
