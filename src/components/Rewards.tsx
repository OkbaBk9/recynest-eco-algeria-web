
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface RewardCardProps {
  title: string;
  points: number;
  description: string;
  image: string;
  sponsor: string;
}

const RewardCard = ({ title, points, description, image, sponsor }: RewardCardProps) => (
  <Card className="glass-card overflow-hidden hover:shadow-xl transition-shadow">
    <div className="h-48 bg-gradient-to-r from-recynest-medium/20 to-recynest-light/50 flex items-center justify-center">
      <div className="w-24 h-24 flex items-center justify-center">
        {image}
      </div>
    </div>
    <CardHeader>
      <CardTitle className="text-xl text-recynest-dark">{title}</CardTitle>
      <CardDescription>Sponsored by {sponsor}</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <div className="bg-recynest-light rounded-full px-4 py-1 flex items-center">
          <svg className="w-5 h-5 text-recynest-dark mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span className="font-bold text-recynest-dark">{points} points</span>
        </div>
      </div>
    </CardContent>
    <CardFooter>
      <Button className="w-full bg-recynest-dark hover:bg-recynest-dark/90">
        Redeem Reward
      </Button>
    </CardFooter>
  </Card>
);

const Rewards = () => {
  return (
    <section id="rewards" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center gradient-text">
          Rewards & EcoPoints
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Turn your recycling efforts into valuable rewards with our EcoPoints system.
        </p>

        <div className="max-w-4xl mx-auto glass-card p-6 md:p-10 rounded-2xl mb-16">
          <h3 className="text-2xl font-bold mb-6 text-recynest-dark">How EcoPoints Work</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-2 text-recynest-dark">Earning Points</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-recynest-medium mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>1 kg of plastic = 50 points</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-recynest-medium mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>1 kg of metal = 70 points</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-recynest-medium mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>1 kg of paper = 30 points</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-recynest-medium mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>1 kg of electronics = 100 points</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2 text-recynest-dark">Additional Bonuses</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-recynest-medium mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Consistent weekly recycling = 100 bonus points</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-recynest-medium mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Referring a friend = 200 bonus points</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-recynest-medium mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Community cleanup participation = 300 points</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-8 text-center text-recynest-dark">Popular Rewards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <RewardCard
            title="1GB Mobile Data Package"
            points={500}
            description="Get 1GB of mobile internet data valid for 30 days on any Algerian carrier."
            image={
              <svg className="w-16 h-16 text-recynest-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            }
            sponsor="Djezzy"
          />

          <RewardCard
            title="Eco-Friendly Shopping Tote"
            points={300}
            description="Stylish reusable shopping bag made from recycled materials by local artisans."
            image={
              <svg className="w-16 h-16 text-recynest-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
              </svg>
            }
            sponsor="Eco-Market Algeria"
          />

          <RewardCard
            title="Cinema Tickets (2)"
            points={700}
            description="Two tickets for any movie at participating cinemas across major cities."
            image={
              <svg className="w-16 h-16 text-recynest-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"></path>
              </svg>
            }
            sponsor="City Cinema"
          />
        </div>
      </div>
    </section>
  );
};

export default Rewards;
