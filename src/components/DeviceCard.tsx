import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

interface Props {
  data: any;
}

const DeviceCard: React.FC<Props> = ({ data }) => {
  const t = useTranslations("Devices");
  return (
    <div className="flex flex-col gap-6 bg-black-6 border border-black-15 p-6 lg:p-10 xl:p-[50px] rounded-[10px] bg-gradient-to-tr from-transparent via-transparent  to-red45-opaque">
      <div className="flex gap-4 items-center">
        <div className="w-11 h-11 lg:w-14 lg:h-14 xl:w-[72px] xl:h-[72px] p-[10px] lg:p-3 xl:p-4 bg-black-8 border-black-12 border rounded-xl">
          <Image
            src={data?.image}
            alt={data?.name}
            draggable={false}
            loading="lazy"
          />
        </div>
        <h3 className="font-semibold text-csm-md">{t(data?.name)}</h3>
      </div>
      <p className="text-csm text-gray-60">{t(data?.info)}</p>
    </div>
  );
};

export default DeviceCard;
