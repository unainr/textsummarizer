"use client";

import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ArrowLeft,
  Activity,
  Stethoscope,
  Play,
  Brain,
  Search,
  FileText,
  Shield,
  AlertTriangle,
  MessageSquare,
} from 'lucide-react';
import { modelCards } from '@/lib/model-data';

const iconMap = {
  Brain,
  Search,
  FileText,
  Shield,
  AlertTriangle,
  MessageSquare,
};

interface DemoClientPageProps {
  cardId: string;
}

export default function DemoText({ cardId }: DemoClientPageProps) {
  const router = useRouter();
  
  const card = modelCards.find(c => c.id === cardId);
  
  const [selectedTask, setSelectedTask] = useState(card?.tasks[0] || '');
  const [selectedModel, setSelectedModel] = useState(card?.models[0] || '');
  const [inputText, setInputText] = useState(card?.sampleText || '');
  const [isProcessing, setIsProcessing] = useState(false);
  const [results, setResults] = useState<string>('');

  if (!card) {
    return (
      <div className="min-h-screen bg-gradient-to-br  from-blue-50 via-white to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Demo Not Found</h1>
          <Button onClick={() => router.push('/')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const handleProcessText = async () => {
    setIsProcessing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Generate mock results based on the task type
    let mockResults = '';
    switch (selectedTask.toLowerCase()) {
      case 'summarizer':
        mockResults = 'SUMMARY: Patient presents with mild throat inflammation and nasal congestion. Clear nasal drainage observed. No significant adenopathy or lung abnormalities detected. Vital signs within normal range.';
        break;
      case 'named entity recognition':
        mockResults = 'ENTITIES DETECTED:\n• CONDITION: acute myocardial infarction\n• MEDICATION: metoprolol 25mg\n• MEDICATION: atorvastatin 40mg\n• PROCEDURE: echocardiogram\n• FREQUENCY: twice daily, once daily\n• DURATION: 6 weeks';
        break;
      case 'cancer staging':
        mockResults = 'ONCOLOGY ANALYSIS:\n• STAGE: Stage IIIA\n• HISTOLOGY: adenocarcinoma\n• LOCATION: lung\n• TUMOR SIZE: 4.2cm\n• DIFFERENTIATION: moderate\n• TREATMENT: neoadjuvant chemotherapy';
        break;
      case 'phi detection':
        mockResults = 'DE-IDENTIFIED TEXT:\nPatient [NAME], DOB: [DATE], was admitted on [DATE]. Contact: [PHONE]. Address: [ADDRESS]. Insurance: [INSURANCE_INFO].';
        break;
      case 'adverse event detection':
        mockResults = 'ADVERSE EVENTS DETECTED:\n• SEVERITY: Severe\n• SYMPTOMS: nausea, dizziness, gastrointestinal upset, fatigue\n• DRUG: metformin\n• ACTION TAKEN: Discontinued\n• DURATION: 3 days';
        break;
      case 'sentiment classification':
        mockResults = 'PATIENT SENTIMENT ANALYSIS:\n• OVERALL SENTIMENT: Mixed (Positive: 60%, Negative: 40%)\n• KEY TOPICS: medication effectiveness, side effects, recommendation\n• SATISFACTION SCORE: 7/10\n• CONCERNS: drowsiness, weight gain';
        break;
      default:
        mockResults = 'Analysis completed successfully. Results show processed clinical text with extracted relevant information.';
    }
    
    setResults(mockResults);
    setIsProcessing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br py-20 from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button 
            variant="outline" 
            onClick={() => router.push('/')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
          
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 rounded-xl p-3">
              <Stethoscope className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Medical AI Labs</h1>
              <p className="text-gray-600">Interactive Demo</p>
            </div>
          </div>
        </div>

        {/* Demo Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Panel - Controls */}
          <div className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  {React.createElement(iconMap[card.iconName as keyof typeof iconMap], { 
                    className: `h-8 w-8 ${card.iconColor}` 
                  })}
                  <CardTitle className="text-xl text-gray-900">{card.title}</CardTitle>
                </div>
                <p className="text-gray-600 leading-relaxed">{card.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-6 ">
                <div>
                  <label className="text-sm font-medium text-blue-600 mb-3 block">
                    Choose the Task:
                  </label>
                  <Select value={selectedTask}  onValueChange={setSelectedTask}>
                    <SelectTrigger className="w-full text-black border-blue-200 focus:border-blue-400">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {card.tasks.map((task) => (
                        <SelectItem  key={task} value={task}>
                          {task}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-blue-600 mb-3 block">
                    Choose the Pretrained Model:
                  </label>
                  <Select value={selectedModel} onValueChange={setSelectedModel}>
                    <SelectTrigger className="w-full text-black border-blue-200 focus:border-blue-400">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {card.models.map((model) => (
                        <SelectItem className=' text-white' key={model} value={model}>
                          {model}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-blue-600 mb-3 block">
                    Input Text:
                  </label>
                  <Textarea
                    value={inputText}
                    onChange={(e:any) => setInputText(e.target.value)}
                    placeholder="Enter your medical text here..."
                    className="min-h-[200px] resize-none border-blue-200 text-black focus:border-blue-400"
                  />
                </div>

                <Button 
                  onClick={handleProcessText} 
                  disabled={isProcessing || !inputText.trim()}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-base"
                >
                  {isProcessing ? (
                    <div className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Processing...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Play className="h-5 w-5" />
                      Run Analysis
                    </div>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Panel - Results */}
          <div className="space-y-6">
            <Card className="bg-gray-900 text-white border-0 shadow-lg h-full">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-green-400" />
                  <CardTitle className="text-white">Analysis Results</CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="h-[500px] overflow-auto">
                {results ? (
                  <pre className="text-sm whitespace-pre-wrap font-mono leading-relaxed text-gray-100">
                    {results}
                  </pre>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center text-gray-400">
                      <Activity className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p className="text-lg font-medium mb-2">Ready to Analyze</p>
                      <p className="text-sm">Run analysis to see results here...</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12">
          <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Explore More Medical AI Models
              </h3>
              <p className="text-gray-600 mb-6">
                Discover our comprehensive suite of medical AI models and transform your healthcare workflows.
              </p>
              <div className="flex gap-4 justify-center">
                <Button 
                  onClick={() => router.push('/')}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  View All Models
                </Button>
                <Button variant="outline">
                  Documentation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}