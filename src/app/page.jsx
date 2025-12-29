import Carousel from "@/Components/Carousel/Carousel";
import Mission from "@/Components/Mission/Mission";
import Service from "@/Components/Service/Service";
import Testimonial from "@/Components/Testimonial/Testimonial";

export default function Home() {
  return (
    <div className="space-y-5">
      <section>
        <Carousel></Carousel>
      </section>
      <section>
        <Mission></Mission>
      </section>
      <section><Service></Service></section>
      <section>

        <Testimonial></Testimonial>
      </section>
    </div>
  )
}
