
"use client";

import { useEffect, useRef } from 'react';
import BpmnModeler from 'bpmn-js/lib/Modeler';
import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const sampleBpmnXml = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn">
  <bpmn:process id="Process_1" isExecutable="false">
    <bpmn:startEvent id="StartEvent_1"/>
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">
      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
        <dc:Bounds x="173" y="102" width="36" height="36" />
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>`;


export default function BpmnModelerPage() {
    const ref = useRef<HTMLDivElement>(null);
    const modelerRef = useRef<BpmnModeler | null>(null);

    useEffect(() => {
        if (!ref.current) return;

        // Ensure we only initialize once
        if (!modelerRef.current) {
            modelerRef.current = new BpmnModeler({
                container: ref.current,
                keyboard: {
                    bindTo: window
                }
            });

            modelerRef.current.importXML(sampleBpmnXml).catch(err => {
                console.error('BPMN import error', err);
            });
        }
        
        // Cleanup on unmount
        return () => {
            modelerRef.current?.destroy();
            modelerRef.current = null;
        }

    }, []);

    return (
      <div className="container mx-auto py-12">
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-3xl">BPMN 2.0 Modeler</CardTitle>
                <CardDescription>Design and visualize your business processes using the BPMN 2.0 standard.</CardDescription>
            </CardHeader>
            <CardContent>
                <div ref={ref} className="h-[600px] w-full border rounded-lg bg-background"></div>
            </CardContent>
        </Card>
      </div>
    );
}
