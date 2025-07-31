import Image from "next/image";

export function Logo() {
  return (
    <div className="relative">
      <Image
        src="https://www.ecu.edu.au/__data/assets/image/0004/1100389/ecu-logo.png"
        className="dark:hidden"
        width={88}
        height={69}
        alt="Edith Cowan University logo"
        role="presentation"
        quality={100}
      />

      <Image
        src="https://www.ecu.edu.au/__data/assets/image/0014/1100390/ecu-logo-alternate.png"
        className="hidden dark:block"
        width={88}
        height={69}
        alt="Edith Cowan University logo"
        role="presentation"
        quality={100}
      />
    </div>
  );
}
