"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";
import Textarea from "@/components/ui/Textarea";

interface ModuleFormProps {
  initialTitle?: string;
  initialDescription?: string;
  submitText?: string;
  loading?: boolean;
  onSubmit: (title: string, description: string) => void;
  onCancel?: () => void;
}

export default function ModuleForm({
  initialTitle = "",
  initialDescription = "",
  submitText = "Save",
  loading = false,
  onSubmit,
  onCancel,
}: ModuleFormProps) {
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [error, setError] = useState("");

  useEffect(() => {
    setTitle(initialTitle);
    setDescription(initialDescription);
  }, [initialTitle, initialDescription]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const trimmedTitle = title.trim();
    const trimmedDescription = description.trim();

    if (!trimmedTitle) {
      setError("Module title is required.");
      return;
    }

    setError("");
    onSubmit(trimmedTitle, trimmedDescription);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="module-title"
          className="mb-2 block text-sm font-medium"
        >
          Module Title
        </label>

        <Input
          id="module-title"
          placeholder="Enter module title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {error && (
          <p className="mt-2 text-sm text-red-600">
            {error}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="module-description"
          className="mb-2 block text-sm font-medium"
        >
          Description
        </label>

        <Textarea
          id="module-description"
          rows={4}
          placeholder="Enter module description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="flex justify-end gap-3">
        {onCancel && (
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
          >
            Cancel
          </Button>
        )}

        <Button
          type="submit"
          disabled={loading}
        >
          {submitText}
        </Button>
      </div>
    </form>
  );
}