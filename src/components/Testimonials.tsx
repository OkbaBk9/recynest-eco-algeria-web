
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
}

const Testimonial = ({ quote, name, role }: TestimonialProps) => (
  <Card className="glass-card hover:shadow-lg transition-shadow">
    <CardContent className="p-6">
      <svg className="w-10 h-10 text-recynest-medium/50 mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.79-2.262 1.94-1.8 3.473-3.01 4.6-3.63.33-.187.362-.605.068-.828-.814-.614-1.515-1.135-2.105-1.563C11.292 4.133 10.98 3.8 10.6 3.5c-.734-.6-1.55-.932-2.45-.996-.15.92.31 2.063 1.372 3.43-1.256-.494-2.235-.98-2.94-1.454-.78.543-1.485 1.288-2.12 2.233-.56.83-.994 1.71-1.306 2.642.19.057.39.114.58.17.59 1.53 1.127 2.66 1.61 3.397.846 1.276 1.533 2.44 2.062 3.494.53 1.053.757 2.244.683 3.572.14.233.176.446.55.234.968-1.61 1.446-2.853 1.435-3.733.02-.872-.253-1.612-.82-2.22-.92.09-.91-.247-1.637-1.015 1.197-.49 2.368-.556 3.51-.2.494.154.844.399 1.05.731.205.333.333.747.382 1.244.1.328.196.657.29.986l.255.854c.16.56.287 1.01.376 1.332.09.322.133.548.132.678-.001.13-.052.22-.154.272-.217.109-.468.122-.756.038-.288-.083-.538-.242-.75-.476-.148-.162-.235-.335-.26-.518-.026-.184.004-.47.088-.86.056-.258.09-.445.104-.56.013-.114 0-.2-.04-.258-.04-.058-.148-.084-.324-.077-.175.007-.364.04-.567.098-.203.058-.36.125-.47.205-.112.076-.192.224-.24.442-.147.659-.375.984-.684.977-.31-.007-.457-.346-.443-1.018.014-.679.223-1.302.625-1.87.4-.567 1.012-.87 1.835-.908zm7.364.447c-.783.195-1.538.265-2.264.212-.724-.054-1.25-.242-1.58-.565.03-.296.194-.752.492-1.368.297-.616.54-1.027.73-1.235.19-.207.48-.375.88-.505.396-.13.76-.154 1.096-.075.335.08.59.235.766.465.175.23.27.52.283.867.014.35-.07.815-.25 1.4-.18.586-.34.977-.48 1.176l-.66.627z" />
      </svg>
      <p className="italic text-muted-foreground mb-6">{quote}</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-recynest-medium/20 flex items-center justify-center text-recynest-dark font-bold">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-recynest-dark">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

const Testimonials = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center gradient-text">
          What Our Community Says
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Hear from the people who are making recycling a part of their daily lives.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Testimonial
            quote="Recynest has transformed how we handle recycling at our café. We now earn points for our waste and use them for business essentials. It's a win-win for us and the environment!"
            name="Amina Benamara"
            role="Café Owner, Algiers"
          />
          <Testimonial
            quote="As a student, the extra income from recycling helps with my expenses. The app makes it easy to find drop-off points near campus, and I can track my environmental impact."
            name="Karim Mezouar"
            role="University Student, Constantine"
          />
          <Testimonial
            quote="Our neighborhood organized a cleanup through Recynest. We collected over 200kg of recyclables and used the points to buy supplies for our community garden. Amazing initiative!"
            name="Leila Hamdani"
            role="Community Organizer, Oran"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
