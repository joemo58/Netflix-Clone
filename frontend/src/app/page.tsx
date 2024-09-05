"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import "../lib/api/apiConfig";
import services from "../lib/api/apiConfig";

export default function ServicesDashboard() {
  const [subscriptionType, setSubscriptionType] = useState("a");

  const [serviceSubscriptionType, setServiceSubscriptionType] = useState({
    userService: "a",
    contentService: "a",
    streamingService: "a",
  });

  const [hitCounts, setHitCounts] = useState({
    userService: 0,
    contentService: 0,
    streamingService: 0,
  });

  // useEffect(() => {
  // populate the hit counts on initial page load use async calls to get all 3 hit counts at once
  //   Promise.all([
  //     fetch(services.userService.endpoints.hit),
  //     fetch(services.contentService.endpoints.hit),
  //     fetch(services.streamingService.endpoints.hit),
  //   ])
  //     .then((responses) => {
  //       return Promise.all(responses.map((response) => response.json()));
  //     })
  //     .then((data) => {
  //       setHitCounts({
  //         userService: data[0].count,
  //         contentService: data[1].count,
  //         streamingService: data[2].count,
  //       });
  //     })
  //     .catch((error) => {
  //       // Handle error
  //     });
  // }, []);


  const handleHit = async (service: keyof typeof hitCounts) => {
    // fetch(services[service].endpoints.hit, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => {
    //     if (response.ok) {
    //       setHitCounts((prev) => ({ ...prev, [service]: prev[service] + 1 }));
    //     } else {
    //       throw new Error("Failed to hit service");
    //     }
    //   })
    //   .catch((error) => {
    //     // Handle error
    //   });
    
    setHitCounts((prev) => ({ ...prev, [service]: prev[service] + 1 }));
  };

  const handleSubscriptionChange = (subscription: string) => {
    // fetch(services.userService.endpoints.hit, {
    //   method: "POST",
    //   body: JSON.stringify({ subscription }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => {
    //     if (response.ok) {
    //       // update the subscription for frontend display
    //       setSubscriptionType(subscription);
    //     } else {
    //       throw new Error("Failed to update subscription");
    //     }
    //   })
    //   .catch((error) => {
    //     // Handle error
    //   });

    // TODO: remove after backend is connected
    setSubscriptionType(subscription);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl space-y-6">
        <Select
          value={subscriptionType}
          onValueChange={handleSubscriptionChange}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select subscription type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="a">Subscription A</SelectItem>
            <SelectItem value="b">Subscription B</SelectItem>
            <SelectItem value="c">Subscription C</SelectItem>
          </SelectContent>
        </Select>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.values(services).map((service) => (
            <div key={service.id} className="space-y-2">
              <Button
                className="w-full"
                onClick={() => handleHit(service.id as keyof typeof hitCounts)}
              >
                Hit {service.name}
              </Button>
              <Card>
                <CardHeader>
                  <CardTitle>{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-center">
                    {hitCounts[service.id as keyof typeof hitCounts]}
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-muted-foreground w-full text-center">
                    Subscription:{" "}
                    {serviceSubscriptionType[
                      service.id as keyof typeof serviceSubscriptionType
                    ].toUpperCase()}
                  </p>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
