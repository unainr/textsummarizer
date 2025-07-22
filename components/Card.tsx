"use client";

import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Search, 
  FileText, 
  Shield, 
  AlertTriangle, 
  MessageSquare,
  Play,
  ExternalLink,
  Stethoscope,
} from 'lucide-react';
import { modelCards } from '@/lib/model-data';
import Link from 'next/link';

const iconMap = {
  Brain,
  Search,
  FileText,
  Shield,
  AlertTriangle,
  MessageSquare,
};

export const  TextCardComponent =()=> {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-green-600 rounded-xl p-3">
              <Stethoscope className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-green-600 bg-clip-text text-transparent">
              Medical AI Labs
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced Natural Language Processing models for healthcare and medical research
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modelCards.map((card) => (
            <Card key={card.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-blue-50 p-3 rounded-xl group-hover:bg-blue-100 transition-colors">
                    {React.createElement(iconMap[card.iconName as keyof typeof iconMap], { 
                      className: `h-8 w-8 ${card.iconColor}` 
                    })}
                  </div>
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900 leading-tight">
                  {card.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {card.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex gap-2 mb-4 flex-wrap">
                  {card.tasks.slice(0, 2).map((task) => (
                    <Badge key={task} variant="secondary" className="text-xs bg-blue-100 text-blue-700">
                      {task}
                    </Badge>
                  ))}
                  {card.tasks.length > 2 && (
                    <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-600">
                      +{card.tasks.length - 2} more
                    </Badge>
                  )}
                </div>

                <div className="flex gap-2 pt-4 border-t border-gray-100">
                    <Link href={`/summarize-text/${card.id}`}>
                  <Button 
                    variant="default" 
                    className="flex-1 cursor-pointer bg-green-600 hover:bg-green-700 text-white"
                    >
                    <Play className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                      </Link>

                  <Button 
                    variant="outline" 
                    className="flex-1 cursor-pointer border-orange-300 text-orange-600 hover:bg-orange-50"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Colab
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to get started?
            </h2>
            <p className="text-gray-600 mb-6">
              Explore our comprehensive suite of medical AI models and transform your healthcare workflows.
            </p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-green-600 hover:bg-green-700">
                Get Started Free
              </Button>
              <Button variant="outline">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default TextCardComponent;