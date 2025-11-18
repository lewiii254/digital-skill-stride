import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Keyboard } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const KeyboardShortcuts = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Open shortcuts dialog with Shift + ?
      if (e.shiftKey && e.key === "?") {
        e.preventDefault();
        setOpen(true);
      }
      // Close with Escape
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const shortcuts = [
    {
      category: "Navigation",
      items: [
        { keys: ["G", "H"], description: "Go to Home" },
        { keys: ["G", "C"], description: "Go to Courses" },
        { keys: ["G", "D"], description: "Go to Dashboard" },
        { keys: ["G", "M"], description: "Go to Mentorship" },
      ]
    },
    {
      category: "General",
      items: [
        { keys: ["?"], description: "Open keyboard shortcuts" },
        { keys: ["Esc"], description: "Close dialog/modal" },
        { keys: ["Tab"], description: "Navigate forward" },
        { keys: ["Shift", "Tab"], description: "Navigate backward" },
      ]
    },
    {
      category: "Actions",
      items: [
        { keys: ["S"], description: "Focus search" },
        { keys: ["N"], description: "Open notifications" },
        { keys: ["T"], description: "Toggle theme" },
      ]
    }
  ];

  const KeyBadge = ({ keyName }: { keyName: string }) => (
    <Badge 
      variant="outline" 
      className="px-2 py-1 font-mono text-xs dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
    >
      {keyName}
    </Badge>
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto dark:bg-gray-800 dark:border-gray-700">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <Keyboard className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            <DialogTitle className="dark:text-white">Keyboard Shortcuts</DialogTitle>
          </div>
          <DialogDescription className="dark:text-gray-300">
            Use these shortcuts to navigate the platform efficiently
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {shortcuts.map((section, idx) => (
            <div key={idx}>
              <h3 className="font-semibold text-sm text-gray-700 dark:text-gray-200 mb-3 uppercase tracking-wide">
                {section.category}
              </h3>
              <div className="space-y-2">
                {section.items.map((item, itemIdx) => (
                  <div 
                    key={itemIdx} 
                    className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {item.description}
                    </span>
                    <div className="flex gap-1">
                      {item.keys.map((key, keyIdx) => (
                        <span key={keyIdx} className="flex items-center gap-1">
                          <KeyBadge keyName={key} />
                          {keyIdx < item.keys.length - 1 && (
                            <span className="text-gray-400 text-xs">+</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Tip:</strong> Press <KeyBadge keyName="Shift" /> + <KeyBadge keyName="?" /> 
            anytime to view this guide
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
