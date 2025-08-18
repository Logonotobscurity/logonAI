"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { assessments } from "@/lib/mock-data";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

const assessment = assessments[1]; // Using AI Readiness assessment for demo

export default function AssessmentPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const totalSteps = assessment.questions.length;
  const progress = (currentStep / totalSteps) * 100;

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit
      setIsCompleted(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const currentQuestion = assessment.questions[currentStep];

  return (
    <div className="container mx-auto max-w-3xl py-12 md:py-24">
      {!isCompleted ? (
        <>
          <div className="text-center mb-8">
            <h1 className="text-4xl font-extrabold font-headline mb-2">{assessment.title}</h1>
            <p className="text-lg text-muted-foreground">{assessment.description}</p>
          </div>
          
          <Card className="shadow-lg">
            <CardHeader>
              <Progress value={progress} className="w-full mb-4" />
              <CardTitle className="font-headline text-2xl">Question {currentStep + 1}/{totalSteps}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-xl mb-6">{currentQuestion.text}</p>
                <RadioGroup
                  value={answers[currentQuestion.id] || ""}
                  onValueChange={(value) => handleAnswerChange(currentQuestion.id, value)}
                >
                  {currentQuestion.options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2 p-4 rounded-lg border has-[:checked]:border-primary has-[:checked]:bg-primary/10 transition-colors">
                      <RadioGroupItem value={option} id={`${currentQuestion.id}-${index}`} />
                      <Label htmlFor={`${currentQuestion.id}-${index}`} className="text-lg flex-1 cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </CardContent>
            <div className="p-6 flex justify-between items-center">
              <Button variant="outline" onClick={handleBack} disabled={currentStep === 0}>
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button onClick={handleNext} disabled={!answers[currentQuestion.id]}>
                {currentStep === totalSteps - 1 ? "Submit & View Results" : "Next"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Card>
        </>
      ) : (
        <Card className="text-center p-8 shadow-lg animate-in fade-in-50">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-3xl font-extrabold font-headline mb-2">Assessment Complete!</h2>
          <p className="text-muted-foreground mb-6">Thank you for your responses. We are analyzing your results to provide personalized recommendations.</p>
          <div className="bg-muted p-6 rounded-lg mb-6">
            <h3 className="font-semibold font-headline text-xl mb-4">Your Summary</h3>
            <ul className="text-left space-y-2">
              {Object.entries(answers).map(([qid, answer]) => (
                <li key={qid} className="text-sm">
                  <span className="font-semibold">{assessment.questions.find(q => q.id === qid)?.text}:</span> {answer}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
                <a href="/dashboard">Go to Dashboard</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
                 <a href="/marketplace">Explore Agents</a>
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
}
