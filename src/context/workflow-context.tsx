
"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import type { Workflow } from '@/lib/types';

interface WorkflowContextType {
  userWorkflows: Workflow[];
  addUserWorkflow: (workflow: Workflow) => void;
}

const WorkflowContext = createContext<WorkflowContextType | undefined>(undefined);

export const WorkflowProvider = ({ children }: { children: ReactNode }) => {
  const [userWorkflows, setUserWorkflows] = useState<Workflow[]>([]);

  const addUserWorkflow = (workflow: Workflow) => {
    // Avoid adding duplicates
    if (!userWorkflows.some(w => w.id === workflow.id)) {
      setUserWorkflows(prevWorkflows => [...prevWorkflows, workflow]);
    }
  };

  return (
    <WorkflowContext.Provider value={{ userWorkflows, addUserWorkflow }}>
      {children}
    </WorkflowContext.Provider>
  );
};

export const useWorkflowContext = () => {
  const context = useContext(WorkflowContext);
  if (context === undefined) {
    throw new Error('useWorkflowContext must be used within a WorkflowProvider');
  }
  return context;
};
