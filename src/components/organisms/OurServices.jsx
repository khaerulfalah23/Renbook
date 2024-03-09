import { OurServiceCard, OurServiceTitle, dataOurService } from '../molecules';

export function OurServices() {
  return (
    <div className="section-container my-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <OurServiceTitle />
        <div className="md:w-1/2">
          <div className="grid grid-cols-2 gap-8 items-center">
            {dataOurService.map((service) => (
              <OurServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
