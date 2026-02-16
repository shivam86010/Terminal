import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  useMemo,
} from "react";
import Editor from "@monaco-editor/react";
import { useTerminal } from "@/context/TerminalContext";
import { ProjectFile } from "@/types/terminal";
import {
  ChevronRight,
  ChevronDown,
  File,
  Folder,
  X,
  Play,
  ExternalLink,
  Search,
  GitBranch,
  Settings,
  User,
  Layers,
  Package,
  Terminal as TerminalIcon,
  Save,
  Copy,
  Clipboard,
  Undo,
  Redo,
  FileText,
  FolderOpen,
  MoreHorizontal,
  ArrowLeft,
  ArrowRight,
  HelpCircle,
  Info,
  Keyboard,
  Youtube,
  Bug,
  Award,
  PanelBottom,
  PanelLeft,
  PanelRight,
  LayoutGrid,
  Maximize2,
  Minimize2,
  Plus,
  Trash2,
  FolderPlus,
  FilePlus,
  RotateCcw,
  Scissors,
  ClipboardPaste,
  FolderSearch,
  Share2,
  Link,
  Edit3,
  ChevronsDownUp,
  Filter,
} from "lucide-react";
import { toast } from "sonner";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Context Menu Component
interface ContextMenuProps {
  x: number;
  y: number;
  file: ProjectFile | null;
  isFolder: boolean;
  onClose: () => void;
  onNewFile: () => void;
  onNewFolder: () => void;
  onDelete: () => void;
  onRename: () => void;
  onCopy: () => void;
  onCut: () => void;
  onPaste: () => void;
  onOpenInTerminal: () => void;
}

const ContextMenu: React.FC<ContextMenuProps> = ({
  x,
  y,
  file,
  isFolder,
  onClose,
  onNewFile,
  onNewFolder,
  onDelete,
  onRename,
  onCopy,
  onCut,
  onPaste,
  onOpenInTerminal,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div
      ref={menuRef}
      className="fixed z-[100] bg-[#252526] border border-[#454545] rounded shadow-xl py-1 min-w-[200px]"
      style={{ left: x, top: y }}
    >
      <button
        onClick={onNewFile}
        className="w-full flex items-center gap-3 px-4 py-1.5 text-sm text-[#cccccc] hover:bg-[#094771]"
      >
        <FilePlus className="w-4 h-4" /> New File...
      </button>
      <button
        onClick={onNewFolder}
        className="w-full flex items-center gap-3 px-4 py-1.5 text-sm text-[#cccccc] hover:bg-[#094771]"
      >
        <FolderPlus className="w-4 h-4" /> New Folder...
      </button>
      <div className="h-px bg-[#454545] my-1" />
      <button
        onClick={() => toast.info("Reveal in File Explorer")}
        className="w-full flex items-center justify-between px-4 py-1.5 text-sm text-[#cccccc] hover:bg-[#094771]"
      >
        <span className="flex items-center gap-3">
          <FolderSearch className="w-4 h-4" /> Reveal in File Explorer
        </span>
        <span className="text-[#6e6e6e] text-xs">Shift+Alt+R</span>
      </button>
      <button
        onClick={onOpenInTerminal}
        className="w-full flex items-center gap-3 px-4 py-1.5 text-sm text-[#cccccc] hover:bg-[#094771]"
      >
        <TerminalIcon className="w-4 h-4" /> Open in Integrated Terminal
      </button>
      <div className="h-px bg-[#454545] my-1" />
      <button
        onClick={() => toast.info("Share")}
        className="w-full flex items-center gap-3 px-4 py-1.5 text-sm text-[#cccccc] hover:bg-[#094771]"
      >
        <Share2 className="w-4 h-4" /> Share
        <ChevronRight className="w-3 h-3 ml-auto" />
      </button>
      <div className="h-px bg-[#454545] my-1" />
      <button
        onClick={() => toast.info("Find in Folder")}
        className="w-full flex items-center justify-between px-4 py-1.5 text-sm text-[#cccccc] hover:bg-[#094771]"
      >
        <span className="flex items-center gap-3">
          <Search className="w-4 h-4" /> Find in Folder...
        </span>
        <span className="text-[#6e6e6e] text-xs">Shift+Alt+F</span>
      </button>
      <button
        onClick={() => toast.info("Add Folder to Chat")}
        className="w-full flex items-center gap-3 px-4 py-1.5 text-sm text-[#cccccc] hover:bg-[#094771]"
      >
        <Plus className="w-4 h-4" /> Add Folder to Chat
      </button>
      <div className="h-px bg-[#454545] my-1" />
      <button
        onClick={onCut}
        className="w-full flex items-center justify-between px-4 py-1.5 text-sm text-[#cccccc] hover:bg-[#094771]"
      >
        <span className="flex items-center gap-3">
          <Scissors className="w-4 h-4" /> Cut
        </span>
        <span className="text-[#6e6e6e] text-xs">Ctrl+X</span>
      </button>
      <button
        onClick={onCopy}
        className="w-full flex items-center justify-between px-4 py-1.5 text-sm text-[#cccccc] hover:bg-[#094771]"
      >
        <span className="flex items-center gap-3">
          <Copy className="w-4 h-4" /> Copy
        </span>
        <span className="text-[#6e6e6e] text-xs">Ctrl+C</span>
      </button>
      <button
        onClick={onPaste}
        className="w-full flex items-center justify-between px-4 py-1.5 text-sm text-[#cccccc] hover:bg-[#094771]"
      >
        <span className="flex items-center gap-3">
          <ClipboardPaste className="w-4 h-4" /> Paste
        </span>
        <span className="text-[#6e6e6e] text-xs">Ctrl+V</span>
      </button>
      <div className="h-px bg-[#454545] my-1" />
      <button
        onClick={() => {
          navigator.clipboard.writeText(file?.name || "");
          toast.success("Path copied");
        }}
        className="w-full flex items-center justify-between px-4 py-1.5 text-sm text-[#cccccc] hover:bg-[#094771]"
      >
        <span className="flex items-center gap-3">
          <Link className="w-4 h-4" /> Copy Path
        </span>
        <span className="text-[#6e6e6e] text-xs">Shift+Alt+C</span>
      </button>
      <button
        onClick={() => {
          navigator.clipboard.writeText(`./${file?.name || ""}`);
          toast.success("Relative path copied");
        }}
        className="w-full flex items-center justify-between px-4 py-1.5 text-sm text-[#cccccc] hover:bg-[#094771]"
      >
        <span className="flex items-center gap-3">
          <Link className="w-4 h-4" /> Copy Relative Path
        </span>
        <span className="text-[#6e6e6e] text-xs">Ctrl+K Ctrl+Shift+C</span>
      </button>
      <div className="h-px bg-[#454545] my-1" />
      <button
        onClick={onRename}
        className="w-full flex items-center justify-between px-4 py-1.5 text-sm text-[#cccccc] hover:bg-[#094771]"
      >
        <span className="flex items-center gap-3">
          <Edit3 className="w-4 h-4" /> Rename...
        </span>
        <span className="text-[#6e6e6e] text-xs">F2</span>
      </button>
      <button
        onClick={onDelete}
        className="w-full flex items-center justify-between px-4 py-1.5 text-sm text-[#cccccc] hover:bg-[#094771] text-red-400"
      >
        <span className="flex items-center gap-3">
          <Trash2 className="w-4 h-4" /> Delete
        </span>
        <span className="text-[#6e6e6e] text-xs">Delete</span>
      </button>
    </div>
  );
};

interface FileTreeProps {
  files: ProjectFile[];
  level?: number;
  onFileSelect: (file: ProjectFile) => void;
  selectedFile: ProjectFile | null;
  onDeleteFile?: (file: ProjectFile) => void;
  onContextMenu?: (e: React.MouseEvent, file: ProjectFile) => void;
  expanded: Record<string, boolean>;
  setExpanded: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  onDragStart?: (file: ProjectFile, parentPath: string) => void;
  onDrop?: (targetFolder: ProjectFile | null, parentPath: string) => void;
  parentPath?: string;
  dragOverFolder?: string | null;
  setDragOverFolder?: (folder: string | null) => void;
  renamingFile?: ProjectFile | null;
  renameValue?: string;
  setRenameValue?: (value: string) => void;
  onRenameSubmit?: (file: ProjectFile, newName: string) => void;
  onRenameStart?: (file: ProjectFile) => void;
}

const FileTree: React.FC<FileTreeProps> = ({
  files,
  level = 0,
  onFileSelect,
  selectedFile,
  onDeleteFile,
  onContextMenu,
  expanded,
  setExpanded,
  onDragStart,
  onDrop,
  parentPath = "",
  dragOverFolder,
  setDragOverFolder,
  renamingFile,
  renameValue,
  setRenameValue,
  onRenameSubmit,
  onRenameStart,
}) => {
  const toggleFolder = (name: string) => {
    setExpanded((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const getFileIcon = (fileName: string) => {
    const ext = fileName.split(".").pop()?.toLowerCase();
    const iconColors: Record<string, string> = {
      tsx: "text-blue-400",
      ts: "text-blue-500",
      jsx: "text-yellow-400",
      js: "text-yellow-500",
      css: "text-pink-400",
      json: "text-yellow-300",
      md: "text-gray-400",
      html: "text-orange-500",
    };
    return iconColors[ext || ""] || "text-muted-foreground";
  };

  const handleDragStart = (e: React.DragEvent, file: ProjectFile) => {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", file.name);
    onDragStart?.(file, parentPath);
  };

  const handleDragOver = (e: React.DragEvent, file: ProjectFile) => {
    e.preventDefault();
    e.stopPropagation();
    if (file.type === "folder") {
      e.dataTransfer.dropEffect = "move";
      setDragOverFolder?.(file.name);
    }
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOverFolder?.(null);
  };

  const handleDrop = (e: React.DragEvent, targetFolder: ProjectFile | null) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOverFolder?.(null);
    if (targetFolder?.type === "folder") {
      onDrop?.(targetFolder, parentPath);
    }
  };

  const handleDoubleClick = (e: React.MouseEvent, file: ProjectFile) => {
    e.stopPropagation();
    onRenameStart?.(file);
  };

  const handleRenameKeyDown = (e: React.KeyboardEvent, file: ProjectFile) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onRenameSubmit?.(file, renameValue || "");
    } else if (e.key === "Escape") {
      onRenameSubmit?.(file, file.name); // Cancel rename
    }
  };

  return (
    <div className="space-y-0">
      {files.map((file) => {
        const currentPath = parentPath
          ? `${parentPath}/${file.name}`
          : file.name;
        const isDragOver = dragOverFolder === file.name;
        const isRenaming = renamingFile?.name === file.name;

        return (
          <div key={file.name} className="group">
            {file.type === "folder" ? (
              <>
                <div
                  draggable={!isRenaming}
                  onDragStart={(e) => handleDragStart(e, file)}
                  onDragOver={(e) => handleDragOver(e, file)}
                  onDragLeave={handleDragLeave}
                  onDrop={(e) => handleDrop(e, file)}
                  onClick={() => !isRenaming && toggleFolder(file.name)}
                  onDoubleClick={(e) => handleDoubleClick(e, file)}
                  onContextMenu={(e) => onContextMenu?.(e, file)}
                  className={`flex items-center gap-1 px-2 py-0.5 hover:bg-[#2a2d2e] cursor-pointer text-sm transition-colors
                    ${isDragOver ? "bg-[#094771] ring-1 ring-blue-400" : ""}`}
                  style={{ paddingLeft: `${level * 12 + 8}px` }}
                >
                  {expanded[file.name] ? (
                    <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />
                  )}
                  <Folder
                    className={`w-4 h-4 shrink-0 ${isDragOver ? "text-blue-400" : "text-yellow-500"}`}
                  />
                  {isRenaming ? (
                    <input
                      type="text"
                      value={renameValue}
                      onChange={(e) => setRenameValue?.(e.target.value)}
                      onKeyDown={(e) => handleRenameKeyDown(e, file)}
                      onBlur={() => onRenameSubmit?.(file, renameValue || "")}
                      autoFocus
                      className="flex-1 bg-[#3c3c3c] text-[#cccccc] text-sm px-1 py-0 border border-[#007acc] outline-none rounded"
                      onClick={(e) => e.stopPropagation()}
                    />
                  ) : (
                    <span className="text-[#cccccc] truncate flex-1">
                      {file.name}
                    </span>
                  )}
                </div>
                {expanded[file.name] && file.children && (
                  <FileTree
                    files={file.children}
                    level={level + 1}
                    onFileSelect={onFileSelect}
                    selectedFile={selectedFile}
                    onDeleteFile={onDeleteFile}
                    onContextMenu={onContextMenu}
                    expanded={expanded}
                    setExpanded={setExpanded}
                    onDragStart={onDragStart}
                    onDrop={onDrop}
                    parentPath={currentPath}
                    dragOverFolder={dragOverFolder}
                    setDragOverFolder={setDragOverFolder}
                    renamingFile={renamingFile}
                    renameValue={renameValue}
                    setRenameValue={setRenameValue}
                    onRenameSubmit={onRenameSubmit}
                    onRenameStart={onRenameStart}
                  />
                )}
              </>
            ) : (
              <div
                draggable={!isRenaming}
                onDragStart={(e) => handleDragStart(e, file)}
                onClick={() => !isRenaming && onFileSelect(file)}
                onDoubleClick={(e) => handleDoubleClick(e, file)}
                onContextMenu={(e) => onContextMenu?.(e, file)}
                className={`flex items-center gap-2 px-2 py-0.5 cursor-grab text-sm transition-colors ${
                  selectedFile?.name === file.name
                    ? "bg-[#094771] text-white"
                    : "hover:bg-[#2a2d2e] text-[#cccccc]"
                }`}
                style={{ paddingLeft: `${level * 12 + 24}px` }}
              >
                <File
                  className={`w-4 h-4 shrink-0 ${getFileIcon(file.name)}`}
                />
                {isRenaming ? (
                  <input
                    type="text"
                    value={renameValue}
                    onChange={(e) => setRenameValue?.(e.target.value)}
                    onKeyDown={(e) => handleRenameKeyDown(e, file)}
                    onBlur={() => onRenameSubmit?.(file, renameValue || "")}
                    autoFocus
                    className="flex-1 bg-[#3c3c3c] text-[#cccccc] text-sm px-1 py-0 border border-[#007acc] outline-none rounded"
                    onClick={(e) => e.stopPropagation()}
                  />
                ) : (
                  <span className="truncate flex-1">{file.name}</span>
                )}
                {onDeleteFile && !isRenaming && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeleteFile(file);
                    }}
                    className="opacity-0 group-hover:opacity-100 p-0.5 hover:bg-red-500/20 rounded"
                  >
                    <Trash2 className="w-3 h-3 text-red-400" />
                  </button>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

// Menu Dropdown Component
interface MenuItemProps {
  label: string;
  shortcut?: string;
  onClick?: () => void;
  disabled?: boolean;
  divider?: boolean;
  hasSubmenu?: boolean;
  submenuItems?: MenuItemProps[];
}

const MenuItem: React.FC<
  MenuItemProps & {
    onSubmenuHover?: (items: MenuItemProps[] | null, label: string) => void;
  }
> = ({
  label,
  shortcut,
  onClick,
  disabled,
  divider,
  hasSubmenu,
  submenuItems,
  onSubmenuHover,
}) => {
  if (divider) {
    return <div className="h-px bg-[#454545] my-1" />;
  }
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() =>
        hasSubmenu && submenuItems && onSubmenuHover?.(submenuItems, label)
      }
      onMouseLeave={() => !hasSubmenu && onSubmenuHover?.(null, "")}
      className={`w-full flex items-center justify-between px-6 py-1 text-sm text-left ${
        disabled
          ? "text-[#6e6e6e] cursor-not-allowed"
          : "text-[#cccccc] hover:bg-[#094771]"
      }`}
    >
      <span>{label}</span>
      <span className="flex items-center gap-2">
        {shortcut && <span className="text-[#6e6e6e]">{shortcut}</span>}
        {hasSubmenu && <ChevronRight className="w-3 h-3" />}
      </span>
    </button>
  );
};

interface MenuDropdownProps {
  label: string | React.ReactNode;
  items: MenuItemProps[];
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  iconOnly?: boolean;
}

const MenuDropdown: React.FC<MenuDropdownProps> = ({
  label,
  items,
  isOpen,
  onToggle,
  onClose,
  iconOnly,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<{
    items: MenuItemProps[];
    label: string;
  } | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
        setActiveSubmenu(null);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  const handleSubmenuHover = (
    submenuItems: MenuItemProps[] | null,
    submenuLabel: string,
  ) => {
    if (submenuItems) {
      setActiveSubmenu({ items: submenuItems, label: submenuLabel });
    }
  };

  return (
    <div ref={menuRef} className="relative">
      <button
        onClick={onToggle}
        className={`px-2 py-1 text-sm ${isOpen ? "bg-[#094771] text-white" : "text-[#cccccc] hover:bg-[#3c3c3c]"} ${iconOnly ? "px-1.5" : ""}`}
      >
        {label}
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-0 bg-[#252526] border border-[#454545] shadow-xl min-w-[220px] py-1 z-50">
          {items.map((item, index) => (
            <div key={index} className="relative">
              <MenuItem {...item} onSubmenuHover={handleSubmenuHover} />
              {/* Submenu */}
              {item.hasSubmenu && activeSubmenu?.label === item.label && (
                <div
                  className="absolute left-full top-0 bg-[#252526] border border-[#454545] shadow-xl min-w-[220px] py-1"
                  onMouseEnter={() =>
                    setActiveSubmenu({
                      items: item.submenuItems || [],
                      label: item.label,
                    })
                  }
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  {activeSubmenu.items.map((subItem, subIndex) => (
                    <MenuItem key={subIndex} {...subItem} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Integrated Terminal Component
interface IntegratedTerminalProps {
  projectName: string;
  onRunCommand: (cmd: string) => void;
  terminalHistory: Array<{
    command: string;
    output: string;
    type: "success" | "error" | "info";
  }>;
}

const IntegratedTerminal: React.FC<IntegratedTerminalProps> = ({
  projectName,
  onRunCommand,
  terminalHistory,
}) => {
  const [input, setInput] = useState("");
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalHistory]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onRunCommand(input.trim());
      setInput("");
    }
  };

  return (
    <div className="h-full flex flex-col bg-[#1e1e1e]">
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-3 py-1 bg-[#252526] border-b border-[#1e1e1e]">
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#cccccc] px-2 py-0.5 bg-[#1e1e1e] border-b-2 border-[#007acc]">
            <TerminalIcon className="w-3 h-3 inline mr-1" />
            Terminal
          </span>
          <span className="text-xs text-[#858585]">Problems</span>
          <span className="text-xs text-[#858585]">Output</span>
          <span className="text-xs text-[#858585]">Debug Console</span>
        </div>
        <div className="flex items-center gap-1">
          <button className="p-1 text-[#858585] hover:text-white hover:bg-[#3c3c3c] rounded">
            <Plus className="w-4 h-4" />
          </button>
          <button className="p-1 text-[#858585] hover:text-white hover:bg-[#3c3c3c] rounded">
            <Trash2 className="w-4 h-4" />
          </button>
          <button className="p-1 text-[#858585] hover:text-white hover:bg-[#3c3c3c] rounded">
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Terminal Content */}
      <div
        ref={terminalRef}
        className="flex-1 overflow-y-auto p-2 font-mono text-sm"
      >
        <div className="text-[#858585] mb-2">
          Welcome to Terminal - {projectName}
        </div>

        {terminalHistory.map((entry, index) => (
          <div key={index} className="mb-2">
            <div className="flex items-center gap-2">
              <span className="text-[#4ec9b0]">➜</span>
              <span className="text-[#cccccc]">{entry.command}</span>
            </div>
            <div
              className={`ml-4 whitespace-pre-wrap ${
                entry.type === "success"
                  ? "text-[#4ec9b0]"
                  : entry.type === "error"
                    ? "text-[#f14c4c]"
                    : "text-[#cccccc]"
              }`}
            >
              {entry.output}
            </div>
          </div>
        ))}

        {/* Input Line */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <span className="text-[#4ec9b0]">➜</span>
          <span className="text-[#569cd6]">~/{projectName}</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent text-[#cccccc] outline-none"
            placeholder="Enter command..."
            autoFocus
          />
        </form>
      </div>
    </div>
  );
};

export const ProjectEditor: React.FC = () => {
  const {
    selectedProject,
    setCurrentView,
    setSelectedProject,
    theme,
    setCurrentDirectory,
  } = useTerminal();
  const [selectedFile, setSelectedFile] = useState<ProjectFile | null>(null);
  const [fileContents, setFileContents] = useState<Record<string, string>>({});
  const [modifiedFiles, setModifiedFiles] = useState<Set<string>>(new Set());
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [showTerminal, setShowTerminal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const [showRightSidebar, setShowRightSidebar] = useState(true);
  const [terminalHistory, setTerminalHistory] = useState<
    Array<{
      command: string;
      output: string;
      type: "success" | "error" | "info";
    }>
  >([]);
  const [projectFiles, setProjectFiles] = useState<ProjectFile[]>([]);
  const [packageJson, setPackageJson] = useState<{
    dependencies: Record<string, string>;
  }>({ dependencies: {} });
  const [openTabs, setOpenTabs] = useState<ProjectFile[]>([]);
  const [splitView, setSplitView] = useState(false);
  const [secondaryFile, setSecondaryFile] = useState<ProjectFile | null>(null);
  const [showNewFileInput, setShowNewFileInput] = useState(false);
  const [showNewFolderInput, setShowNewFolderInput] = useState(false);
  const [newItemName, setNewItemName] = useState("");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    src: true,
  });
  const [contextMenu, setContextMenu] = useState<{
    x: number;
    y: number;
    file: ProjectFile | null;
  } | null>(null);
  const [clipboardFile, setClipboardFile] = useState<{
    file: ProjectFile;
    action: "copy" | "cut";
  } | null>(null);
  const [targetFolder, setTargetFolder] = useState<ProjectFile | null>(null);
  const [draggedFile, setDraggedFile] = useState<{
    file: ProjectFile;
    parentPath: string;
  } | null>(null);
  const [dragOverFolder, setDragOverFolder] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showShortcuts, setShowShortcuts] = useState(false);
  const [renamingFile, setRenamingFile] = useState<ProjectFile | null>(null);
  const [renameValue, setRenameValue] = useState("");
  const editorRef = useRef<any>(null);
  const secondaryEditorRef = useRef<any>(null);

  // Filter files based on search query
  const filterFiles = useCallback(
    (files: ProjectFile[], query: string): ProjectFile[] => {
      if (!query.trim()) return files;

      const lowerQuery = query.toLowerCase();

      const filterRecursive = (items: ProjectFile[]): ProjectFile[] => {
        return items.reduce<ProjectFile[]>((acc, file) => {
          if (file.type === "folder") {
            const filteredChildren = file.children
              ? filterRecursive(file.children)
              : [];
            // Include folder if it has matching children or its name matches
            if (
              filteredChildren.length > 0 ||
              file.name.toLowerCase().includes(lowerQuery)
            ) {
              acc.push({ ...file, children: filteredChildren });
            }
          } else {
            if (file.name.toLowerCase().includes(lowerQuery)) {
              acc.push(file);
            }
          }
          return acc;
        }, []);
      };

      return filterRecursive(files);
    },
    [],
  );

  const filteredFiles = useMemo(
    () => filterFiles(projectFiles, searchQuery),
    [projectFiles, searchQuery, filterFiles],
  );

  // Initialize project files - load custom files from localStorage
  useEffect(() => {
    if (selectedProject) {
      // Load custom files from localStorage
      const savedFiles = localStorage.getItem(`files-${selectedProject.id}`);
      if (savedFiles) {
        setProjectFiles(JSON.parse(savedFiles));
      } else {
        setProjectFiles([...selectedProject.files]);
      }
      // Initialize package.json
      const saved = localStorage.getItem(`package-${selectedProject.id}`);
      if (saved) {
        setPackageJson(JSON.parse(saved));
      } else {
        setPackageJson({
          dependencies: {
            react: "^18.3.1",
            "react-dom": "^18.3.1",
            typescript: "^5.0.0",
          },
        });
      }
    }
  }, [selectedProject]);

  // Save project files to localStorage whenever they change
  useEffect(() => {
    if (selectedProject && projectFiles.length > 0) {
      localStorage.setItem(
        `files-${selectedProject.id}`,
        JSON.stringify(projectFiles),
      );
    }
  }, [projectFiles, selectedProject]);

  // Load saved content from localStorage
  useEffect(() => {
    if (selectedProject) {
      const saved = localStorage.getItem(`project-${selectedProject.id}`);
      if (saved) {
        setFileContents(JSON.parse(saved));
      }
    }
  }, [selectedProject]);

  const handleClose = () => {
    setSelectedProject(null);
    setCurrentDirectory("~");
    setCurrentView("terminal");
  };

  const handleRunProject = () => {
    if (selectedProject?.liveUrl) {
      toast.success("Starting development server...", {
        description: "Opening project in new tab",
      });
      setTimeout(() => window.open(selectedProject.liveUrl, "_blank"), 500);
    }
  };

  const handleSave = useCallback(() => {
    if (selectedProject && selectedFile) {
      const contentToSave = { ...fileContents };
      localStorage.setItem(
        `project-${selectedProject.id}`,
        JSON.stringify(contentToSave),
      );
      setModifiedFiles((prev) => {
        const next = new Set(prev);
        next.delete(selectedFile.name);
        return next;
      });
      toast.success("File saved!", {
        description: `${selectedFile.name} saved to localStorage`,
      });
    }
  }, [selectedProject, selectedFile, fileContents]);

  const handleSaveAll = useCallback(() => {
    if (selectedProject) {
      localStorage.setItem(
        `project-${selectedProject.id}`,
        JSON.stringify(fileContents),
      );
      setModifiedFiles(new Set());
      toast.success("All files saved!", {
        description: "Project saved to localStorage",
      });
    }
  }, [selectedProject, fileContents]);

  // Handle terminal commands
  const handleTerminalCommand = useCallback(
    (cmd: string) => {
      const parts = cmd.trim().split(" ");
      const command = parts[0].toLowerCase();
      const args = parts.slice(1);

      if (command === "npm" || command === "yarn") {
        const subCommand = parts[1];

        if (
          (subCommand === "run" && parts[2] === "dev") ||
          subCommand === "start" ||
          subCommand === "dev"
        ) {
          setTerminalHistory((prev) => [
            ...prev,
            {
              command: cmd,
              output: `> ${selectedProject?.name}@1.0.0 dev\n> vite\n\n  VITE v5.0.0  ready in 234 ms\n\n  ➜  Local:   http://localhost:5173/\n  ➜  Network: use --host to expose\n\n✓ Development server running!`,
              type: "success",
            },
          ]);
          if (selectedProject?.liveUrl) {
            setTimeout(
              () => window.open(selectedProject.liveUrl, "_blank"),
              1000,
            );
          }
          return;
        }

        if (subCommand === "install" || subCommand === "i") {
          const packageName = parts[2];
          if (packageName) {
            const newPackageJson = {
              ...packageJson,
              dependencies: {
                ...packageJson.dependencies,
                [packageName]: "^latest",
              },
            };
            setPackageJson(newPackageJson);
            localStorage.setItem(
              `package-${selectedProject?.id}`,
              JSON.stringify(newPackageJson),
            );

            setTerminalHistory((prev) => [
              ...prev,
              {
                command: cmd,
                output: `added 1 package in 2.3s\n\n+ ${packageName}@latest\nadded to dependencies in package.json`,
                type: "success",
              },
            ]);
          } else {
            setTerminalHistory((prev) => [
              ...prev,
              {
                command: cmd,
                output: `Installing dependencies...\n\nadded 150 packages in 8.2s\n\n✓ All packages installed successfully!`,
                type: "success",
              },
            ]);
          }
          return;
        }

        if (subCommand === "build") {
          setTerminalHistory((prev) => [
            ...prev,
            {
              command: cmd,
              output: `> ${selectedProject?.name}@1.0.0 build\n> tsc && vite build\n\nvite v5.0.0 building for production...\n✓ 127 modules transformed.\ndist/index.html        0.46 kB │ gzip:  0.30 kB\ndist/assets/index.css   4.21 kB │ gzip:  1.36 kB\ndist/assets/index.js  142.36 kB │ gzip: 45.87 kB\n\n✓ Built successfully!`,
              type: "success",
            },
          ]);
          return;
        }
      }

      if (command === "clear" || command === "cls") {
        setTerminalHistory([]);
        return;
      }

      if (command === "ls" || command === "dir") {
        const files = projectFiles.map((f) =>
          f.type === "folder" ? `📁 ${f.name}/` : `📄 ${f.name}`,
        );
        setTerminalHistory((prev) => [
          ...prev,
          {
            command: cmd,
            output: files.join("\n"),
            type: "info",
          },
        ]);
        return;
      }

      if (command === "pwd") {
        setTerminalHistory((prev) => [
          ...prev,
          {
            command: cmd,
            output: `/home/user/${selectedProject?.id}`,
            type: "info",
          },
        ]);
        return;
      }

      if (command === "touch") {
        const fileName = args[0];
        if (fileName) {
          const newFile: ProjectFile = {
            name: fileName,
            type: "file",
            content: "",
          };
          setProjectFiles((prev) => [...prev, newFile]);
          setFileContents((prev) => ({ ...prev, [fileName]: "" }));
          setTerminalHistory((prev) => [
            ...prev,
            {
              command: cmd,
              output: `Created file: ${fileName}`,
              type: "success",
            },
          ]);
        } else {
          setTerminalHistory((prev) => [
            ...prev,
            {
              command: cmd,
              output: "Usage: touch <filename>",
              type: "error",
            },
          ]);
        }
        return;
      }

      if (command === "rm") {
        const fileName = args[0];
        if (fileName) {
          setProjectFiles((prev) => prev.filter((f) => f.name !== fileName));
          setFileContents((prev) => {
            const next = { ...prev };
            delete next[fileName];
            return next;
          });
          if (selectedFile?.name === fileName) {
            setSelectedFile(null);
          }
          setTerminalHistory((prev) => [
            ...prev,
            {
              command: cmd,
              output: `Removed: ${fileName}`,
              type: "success",
            },
          ]);
        } else {
          setTerminalHistory((prev) => [
            ...prev,
            {
              command: cmd,
              output: "Usage: rm <filename>",
              type: "error",
            },
          ]);
        }
        return;
      }

      if (command === "mkdir") {
        const folderName = args[0];
        if (folderName) {
          const newFolder: ProjectFile = {
            name: folderName,
            type: "folder",
            children: [],
          };
          setProjectFiles((prev) => [...prev, newFolder]);
          setTerminalHistory((prev) => [
            ...prev,
            {
              command: cmd,
              output: `Created directory: ${folderName}`,
              type: "success",
            },
          ]);
        } else {
          setTerminalHistory((prev) => [
            ...prev,
            {
              command: cmd,
              output: "Usage: mkdir <foldername>",
              type: "error",
            },
          ]);
        }
        return;
      }

      if (command === "cat") {
        const fileName = args[0];
        if (fileName) {
          const content = fileContents[fileName];
          if (content !== undefined) {
            setTerminalHistory((prev) => [
              ...prev,
              {
                command: cmd,
                output: content || "(empty file)",
                type: "info",
              },
            ]);
          } else {
            setTerminalHistory((prev) => [
              ...prev,
              {
                command: cmd,
                output: `cat: ${fileName}: No such file`,
                type: "error",
              },
            ]);
          }
        }
        return;
      }

      if (command === "exit") {
        setShowTerminal(false);
        return;
      }

      if (command === "help") {
        setTerminalHistory((prev) => [
          ...prev,
          {
            command: cmd,
            output: `Available commands:
  npm run dev     - Start development server
  npm install     - Install dependencies
  npm build       - Build for production
  touch <file>    - Create a new file
  rm <file>       - Delete a file
  mkdir <dir>     - Create a directory
  ls              - List files
  cat <file>      - Show file content
  pwd             - Print working directory
  clear           - Clear terminal
  exit            - Close terminal`,
            type: "info",
          },
        ]);
        return;
      }

      // Unknown command
      setTerminalHistory((prev) => [
        ...prev,
        {
          command: cmd,
          output: `Command not found: ${command}\nType 'help' for available commands.`,
          type: "error",
        },
      ]);
    },
    [selectedProject, projectFiles, fileContents, packageJson, selectedFile],
  );

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "s") {
        e.preventDefault();
        handleSave();
      }
      if (e.ctrlKey && e.shiftKey && e.key === "S") {
        e.preventDefault();
        handleSaveAll();
      }
      if (e.ctrlKey && e.key === "`") {
        e.preventDefault();
        setShowTerminal((prev) => !prev);
      }
      if (e.ctrlKey && e.key === "b") {
        e.preventDefault();
        setShowSidebar((prev) => !prev);
      }
      // Show shortcuts popup with Ctrl+?
      if (e.ctrlKey && (e.key === "?" || (e.shiftKey && e.key === "/"))) {
        e.preventDefault();
        setShowShortcuts((prev) => !prev);
      }
      // F2 to rename selected file
      if (e.key === "F2" && selectedFile) {
        e.preventDefault();
        setRenamingFile(selectedFile);
        setRenameValue(selectedFile.name);
      }
      // Escape to close shortcuts popup
      if (e.key === "Escape") {
        setShowShortcuts(false);
        setRenamingFile(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleSave, handleSaveAll, selectedFile]);

  // Handle file rename
  const handleRenameFile = useCallback(
    (oldFile: ProjectFile, newName: string) => {
      if (!newName.trim() || newName === oldFile.name) {
        setRenamingFile(null);
        return;
      }

      const renameInTree = (files: ProjectFile[]): ProjectFile[] => {
        return files.map((f) => {
          if (f === oldFile || f.name === oldFile.name) {
            return { ...f, name: newName.trim() };
          }
          if (f.type === "folder" && f.children) {
            return { ...f, children: renameInTree(f.children) };
          }
          return f;
        });
      };

      setProjectFiles((prev) => renameInTree(prev));

      // Update file contents key
      if (fileContents[oldFile.name] !== undefined) {
        setFileContents((prev) => {
          const next = { ...prev };
          next[newName.trim()] = next[oldFile.name];
          delete next[oldFile.name];
          return next;
        });
      }

      // Update selected file
      if (selectedFile?.name === oldFile.name) {
        setSelectedFile({ ...oldFile, name: newName.trim() });
      }

      // Update open tabs
      setOpenTabs((prev) =>
        prev.map((t) =>
          t.name === oldFile.name ? { ...t, name: newName.trim() } : t,
        ),
      );

      // Update modified files set
      if (modifiedFiles.has(oldFile.name)) {
        setModifiedFiles((prev) => {
          const next = new Set(prev);
          next.delete(oldFile.name);
          next.add(newName.trim());
          return next;
        });
      }

      toast.success(`Renamed to: ${newName.trim()}`);
      setRenamingFile(null);
    },
    [fileContents, selectedFile, modifiedFiles],
  );

  const handleEditorChange = (value: string | undefined) => {
    if (selectedFile && value !== undefined) {
      setFileContents((prev) => ({ ...prev, [selectedFile.name]: value }));
      setModifiedFiles((prev) => new Set(prev).add(selectedFile.name));
    }
  };

  const handleSecondaryEditorChange = (value: string | undefined) => {
    if (secondaryFile && value !== undefined) {
      setFileContents((prev) => ({ ...prev, [secondaryFile.name]: value }));
      setModifiedFiles((prev) => new Set(prev).add(secondaryFile.name));
    }
  };

  const handleDeleteFile = (file: ProjectFile) => {
    setProjectFiles((prev) => prev.filter((f) => f.name !== file.name));
    setFileContents((prev) => {
      const next = { ...prev };
      delete next[file.name];
      return next;
    });
    if (selectedFile?.name === file.name) {
      setSelectedFile(null);
    }
    if (secondaryFile?.name === file.name) {
      setSecondaryFile(null);
    }
    setOpenTabs((prev) => prev.filter((t) => t.name !== file.name));
    toast.success(`Deleted: ${file.name}`);
  };

  const handleNewFile = (folder?: ProjectFile | null) => {
    if (
      folder instanceof Event ||
      (folder && typeof (folder as any).preventDefault === "function")
    ) {
      // Called from button click, add to root
      setTargetFolder(null);
    } else {
      setTargetFolder(folder || null);
    }
    setShowNewFileInput(true);
    setNewItemName("");
  };

  const handleNewFolder = (folder?: ProjectFile | null) => {
    if (
      folder instanceof Event ||
      (folder && typeof (folder as any).preventDefault === "function")
    ) {
      // Called from button click, add to root
      setTargetFolder(null);
    } else {
      setTargetFolder(folder || null);
    }
    setShowNewFolderInput(true);
    setNewItemName("");
  };

  // Helper to add file/folder inside a specific folder recursively
  const addToFolder = (
    files: ProjectFile[],
    targetFolderName: string,
    newItem: ProjectFile,
  ): ProjectFile[] => {
    return files.map((f) => {
      if (f.type === "folder" && f.name === targetFolderName) {
        return { ...f, children: [...(f.children || []), newItem] };
      }
      if (f.type === "folder" && f.children) {
        return {
          ...f,
          children: addToFolder(f.children, targetFolderName, newItem),
        };
      }
      return f;
    });
  };

  const handleCreateNewFile = () => {
    if (newItemName.trim()) {
      const newFile: ProjectFile = {
        name: newItemName.trim(),
        type: "file",
        content: "",
      };

      if (targetFolder && targetFolder.type === "folder") {
        // Add inside the target folder
        setProjectFiles((prev) =>
          addToFolder(prev, targetFolder.name, newFile),
        );
        setExpanded((prev) => ({ ...prev, [targetFolder.name]: true }));
      } else {
        // Add to root
        setProjectFiles((prev) => [...prev, newFile]);
      }

      setFileContents((prev) => ({ ...prev, [newItemName.trim()]: "" }));
      toast.success(`Created: ${newItemName.trim()}`);
      setShowNewFileInput(false);
      setNewItemName("");
      setTargetFolder(null);
      setSelectedFile(newFile);
      setOpenTabs((prev) => [
        ...prev.filter((t) => t.name !== newFile.name),
        newFile,
      ]);
    }
  };

  const handleCreateNewFolder = () => {
    if (newItemName.trim()) {
      const newFolder: ProjectFile = {
        name: newItemName.trim(),
        type: "folder",
        children: [],
      };

      if (targetFolder && targetFolder.type === "folder") {
        // Add inside the target folder
        setProjectFiles((prev) =>
          addToFolder(prev, targetFolder.name, newFolder),
        );
        setExpanded((prev) => ({ ...prev, [targetFolder.name]: true }));
      } else {
        // Add to root
        setProjectFiles((prev) => [...prev, newFolder]);
      }

      toast.success(`Created folder: ${newItemName.trim()}`);
      setShowNewFolderInput(false);
      setNewItemName("");
      setTargetFolder(null);
    }
  };

  const handleFileSelect = (file: ProjectFile) => {
    if (file.type === "file") {
      setSelectedFile(file);
      if (!openTabs.find((t) => t.name === file.name)) {
        setOpenTabs((prev) => [...prev, file]);
      }
    }
  };

  const handleTabClose = (file: ProjectFile, e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenTabs((prev) => prev.filter((t) => t.name !== file.name));
    if (selectedFile?.name === file.name) {
      const remaining = openTabs.filter((t) => t.name !== file.name);
      setSelectedFile(
        remaining.length > 0 ? remaining[remaining.length - 1] : null,
      );
    }
    if (secondaryFile?.name === file.name) {
      setSecondaryFile(null);
      if (openTabs.filter((t) => t.name !== file.name).length === 0) {
        setSplitView(false);
      }
    }
  };

  const handleSplitEditor = () => {
    if (openTabs.length >= 2 && !splitView) {
      setSplitView(true);
      setSecondaryFile(
        openTabs.find((t) => t.name !== selectedFile?.name) || null,
      );
    } else if (splitView) {
      setSplitView(false);
      setSecondaryFile(null);
    } else {
      toast.info("Open at least 2 files to use split view");
    }
  };

  const findDefaultFile = useCallback(
    (files: ProjectFile[]): ProjectFile | null => {
      for (const file of files) {
        if (file.type === "file") return file;
        if (file.children) {
          const found = findDefaultFile(file.children);
          if (found) return found;
        }
      }
      return null;
    },
    [],
  );

  useEffect(() => {
    if (selectedProject && !selectedFile) {
      const defaultFile = findDefaultFile(selectedProject.files);
      if (defaultFile) setSelectedFile(defaultFile);
    }
  }, [selectedProject, selectedFile, findDefaultFile]);

  if (!selectedProject) return null;

  const getMonacoLanguage = (file: ProjectFile) => {
    if (file.language) return file.language;
    const ext = file.name.split(".").pop();
    const langMap: Record<string, string> = {
      tsx: "typescript",
      ts: "typescript",
      js: "javascript",
      jsx: "javascript",
      json: "json",
      md: "markdown",
      css: "css",
      html: "html",
      vue: "vue",
    };
    return langMap[ext || ""] || "plaintext";
  };

  const getFileContent = (file: ProjectFile) => {
    return fileContents[file.name] ?? file.content ?? "";
  };

  const fileMenuItems: MenuItemProps[] = [
    { label: "New Text File", shortcut: "Ctrl+N", onClick: handleNewFile },
    {
      label: "New File...",
      shortcut: "Ctrl+Alt+Win+N",
      onClick: handleNewFile,
    },
    {
      label: "New Window",
      shortcut: "Ctrl+Shift+N",
      onClick: () => toast.info("Feature coming soon!"),
    },
    { divider: true, label: "" },
    {
      label: "Open File...",
      shortcut: "Ctrl+O",
      onClick: () => toast.info("Feature coming soon!"),
    },
    {
      label: "Open Folder...",
      shortcut: "Ctrl+K Ctrl+O",
      onClick: () => toast.info("Feature coming soon!"),
    },
    { divider: true, label: "" },
    { label: "Save", shortcut: "Ctrl+S", onClick: handleSave },
    { label: "Save As...", shortcut: "Ctrl+Shift+S", onClick: handleSave },
    { label: "Save All", shortcut: "Ctrl+K S", onClick: handleSaveAll },
    { divider: true, label: "" },
    { label: "Auto Save", onClick: () => toast.info("Auto save toggled!") },
    { divider: true, label: "" },
    { label: "Close Editor", shortcut: "Ctrl+F4", onClick: handleClose },
    { label: "Close Window", shortcut: "Alt+F4", onClick: handleClose },
  ];

  const editMenuItems: MenuItemProps[] = [
    {
      label: "Undo",
      shortcut: "Ctrl+Z",
      onClick: () => editorRef.current?.trigger("keyboard", "undo"),
    },
    {
      label: "Redo",
      shortcut: "Ctrl+Y",
      onClick: () => editorRef.current?.trigger("keyboard", "redo"),
    },
    { divider: true, label: "" },
    {
      label: "Cut",
      shortcut: "Ctrl+X",
      onClick: () => document.execCommand("cut"),
    },
    {
      label: "Copy",
      shortcut: "Ctrl+C",
      onClick: () => document.execCommand("copy"),
    },
    {
      label: "Paste",
      shortcut: "Ctrl+V",
      onClick: () => document.execCommand("paste"),
    },
    { divider: true, label: "" },
    {
      label: "Find",
      shortcut: "Ctrl+F",
      onClick: () => editorRef.current?.trigger("keyboard", "actions.find"),
    },
    {
      label: "Replace",
      shortcut: "Ctrl+H",
      onClick: () =>
        editorRef.current?.trigger(
          "keyboard",
          "editor.action.startFindReplaceAction",
        ),
    },
    { divider: true, label: "" },
    {
      label: "Find in Files",
      shortcut: "Ctrl+Shift+F",
      onClick: () => toast.info("Feature coming soon!"),
    },
    {
      label: "Replace in Files",
      shortcut: "Ctrl+Shift+H",
      onClick: () => toast.info("Feature coming soon!"),
    },
    { divider: true, label: "" },
    {
      label: "Toggle Line Comment",
      shortcut: "Ctrl+/",
      onClick: () =>
        editorRef.current?.trigger("keyboard", "editor.action.commentLine"),
    },
  ];

  const viewMenuItems: MenuItemProps[] = [
    {
      label: "Command Palette...",
      shortcut: "Ctrl+Shift+P",
      onClick: () =>
        editorRef.current?.trigger("keyboard", "editor.action.quickCommand"),
    },
    { divider: true, label: "" },
    {
      label: "Explorer",
      shortcut: "Ctrl+Shift+E",
      onClick: () => setShowSidebar((prev) => !prev),
    },
    {
      label: "Search",
      shortcut: "Ctrl+Shift+F",
      onClick: () => toast.info("Feature coming soon!"),
    },
    {
      label: "Source Control",
      shortcut: "Ctrl+Shift+G",
      onClick: () => toast.info("Feature coming soon!"),
    },
    { divider: true, label: "" },
    { label: "Split Editor", shortcut: "Ctrl+\\", onClick: handleSplitEditor },
    {
      label: "Terminal",
      shortcut: "Ctrl+`",
      onClick: () => setShowTerminal((prev) => !prev),
    },
    {
      label: "Toggle Sidebar",
      shortcut: "Ctrl+B",
      onClick: () => setShowSidebar((prev) => !prev),
    },
    {
      label: "Toggle Panel",
      shortcut: "Ctrl+J",
      onClick: () => setShowTerminal((prev) => !prev),
    },
  ];

  const runMenuItems: MenuItemProps[] = [
    { label: "Start Debugging", shortcut: "F5", onClick: handleRunProject },
    {
      label: "Run Without Debugging",
      shortcut: "Ctrl+F5",
      onClick: handleRunProject,
    },
    { divider: true, label: "" },
    { label: "Open in Browser", onClick: handleRunProject },
  ];

  return (
    <div className="flex flex-col h-full bg-[#1e1e1e] overflow-hidden">
      {/* VS Code Title Bar */}
      <div className="flex items-center bg-[#323233] h-8 px-2 border-b border-[#252526]">
        <div className="flex items-center gap-2 mr-4">
          <div className="flex gap-1.5">
            <button
              onClick={handleClose}
              className="w-3 h-3 rounded-full bg-[#ff5f56] hover:brightness-110"
            />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
        </div>

        {/* Menu Bar */}
        <div className="flex items-center">
          <MenuDropdown
            label="File"
            items={fileMenuItems}
            isOpen={activeMenu === "file"}
            onToggle={() =>
              setActiveMenu(activeMenu === "file" ? null : "file")
            }
            onClose={() => setActiveMenu(null)}
          />
          <MenuDropdown
            label="Edit"
            items={editMenuItems}
            isOpen={activeMenu === "edit"}
            onToggle={() =>
              setActiveMenu(activeMenu === "edit" ? null : "edit")
            }
            onClose={() => setActiveMenu(null)}
          />
          <MenuDropdown
            label="Selection"
            items={[
              {
                label: "Select All",
                shortcut: "Ctrl+A",
                onClick: () =>
                  editorRef.current?.trigger(
                    "keyboard",
                    "editor.action.selectAll",
                  ),
              },
            ]}
            isOpen={activeMenu === "selection"}
            onToggle={() =>
              setActiveMenu(activeMenu === "selection" ? null : "selection")
            }
            onClose={() => setActiveMenu(null)}
          />
          <MenuDropdown
            label="View"
            items={viewMenuItems}
            isOpen={activeMenu === "view"}
            onToggle={() =>
              setActiveMenu(activeMenu === "view" ? null : "view")
            }
            onClose={() => setActiveMenu(null)}
          />
          <MenuDropdown
            label="Go"
            items={[
              {
                label: "Go to File...",
                shortcut: "Ctrl+P",
                onClick: () => toast.info("Feature coming soon!"),
              },
              {
                label: "Go to Line...",
                shortcut: "Ctrl+G",
                onClick: () =>
                  editorRef.current?.trigger(
                    "keyboard",
                    "editor.action.gotoLine",
                  ),
              },
            ]}
            isOpen={activeMenu === "go"}
            onToggle={() => setActiveMenu(activeMenu === "go" ? null : "go")}
            onClose={() => setActiveMenu(null)}
          />
          <MenuDropdown
            label="Run"
            items={runMenuItems}
            isOpen={activeMenu === "run"}
            onToggle={() => setActiveMenu(activeMenu === "run" ? null : "run")}
            onClose={() => setActiveMenu(null)}
          />

          {/* Three Dots Menu with Terminal and Help submenus */}
          <MenuDropdown
            label={<MoreHorizontal className="w-4 h-4" />}
            iconOnly
            items={[
              {
                label: "Terminal",
                hasSubmenu: true,
                submenuItems: [
                  {
                    label: "New Terminal",
                    shortcut: "Ctrl+Shift+`",
                    onClick: () => setShowTerminal(true),
                  },
                  {
                    label: "Split Terminal",
                    shortcut: "Ctrl+Shift+5",
                    onClick: () => {
                      setShowTerminal(true);
                      toast.info("Terminal split");
                    },
                  },
                  {
                    label: "New Terminal Window",
                    shortcut: "Ctrl+Shift+Alt+`",
                    onClick: () => setShowTerminal(true),
                  },
                  { divider: true, label: "" },
                  {
                    label: "Run Task...",
                    onClick: () => {
                      setShowTerminal(true);
                      toast.info("Run task...");
                    },
                  },
                  {
                    label: "Run Build Task...",
                    shortcut: "Ctrl+Shift+B",
                    onClick: () => {
                      setShowTerminal(true);
                      handleTerminalCommand("npm build");
                    },
                  },
                  { label: "Run Active File", onClick: handleRunProject },
                  {
                    label: "Run Selected Text",
                    onClick: () => toast.info("Running selected text..."),
                  },
                  { divider: true, label: "" },
                  {
                    label: "Show Running Tasks...",
                    onClick: () => toast.info("No running tasks"),
                    disabled: true,
                  },
                  {
                    label: "Restart Running Task...",
                    onClick: () => toast.info("No tasks to restart"),
                    disabled: true,
                  },
                  {
                    label: "Terminate Task...",
                    onClick: () => toast.info("No tasks to terminate"),
                    disabled: true,
                  },
                  { divider: true, label: "" },
                  {
                    label: "Configure Tasks...",
                    onClick: () => toast.info("Configure tasks..."),
                  },
                  {
                    label: "Configure Default Build Task...",
                    onClick: () =>
                      toast.info("Configure default build task..."),
                  },
                ],
              },
              {
                label: "Help",
                hasSubmenu: true,
                submenuItems: [
                  {
                    label: "Welcome",
                    onClick: () => {
                      handleClose();
                      toast.success("Welcome back to terminal!");
                    },
                  },
                  {
                    label: "Show All Commands",
                    shortcut: "Ctrl+Shift+P",
                    onClick: () =>
                      editorRef.current?.trigger(
                        "keyboard",
                        "editor.action.quickCommand",
                      ),
                  },
                  {
                    label: "Documentation",
                    onClick: () =>
                      window.open(
                        "https://code.visualstudio.com/docs",
                        "_blank",
                      ),
                  },
                  {
                    label: "Editor Playground",
                    onClick: () => toast.info("Opening playground..."),
                  },
                  {
                    label: "Open Walkthrough...",
                    onClick: () => toast.info("Opening walkthrough..."),
                  },
                  {
                    label: "Show Release Notes",
                    onClick: () =>
                      toast.info("Version 1.0.0 - Terminal Portfolio"),
                  },
                  {
                    label: "Get Started with Accessibility Features",
                    onClick: () => toast.info("Accessibility features..."),
                  },
                  {
                    label: "Ask @vscode",
                    onClick: () => toast.info("Ask @vscode..."),
                  },
                  { divider: true, label: "" },
                  {
                    label: "Keyboard Shortcuts Reference",
                    shortcut: "Ctrl+K Ctrl+R",
                    onClick: () =>
                      toast.info(
                        "Ctrl+K: Clear | Ctrl+L: Theme | Ctrl+S: Save | Ctrl+`: Terminal",
                      ),
                  },
                  {
                    label: "Video Tutorials",
                    onClick: () => window.open("https://youtube.com", "_blank"),
                  },
                  {
                    label: "Tips and Tricks",
                    onClick: () =>
                      toast.success(
                        'Try typing "help" in the terminal for commands!',
                      ),
                  },
                  { divider: true, label: "" },
                  {
                    label: "Join Us on YouTube",
                    onClick: () => window.open("https://youtube.com", "_blank"),
                  },
                  {
                    label: "Search Feature Requests",
                    onClick: () => toast.info("Feature requests..."),
                  },
                  {
                    label: "Report Issue",
                    onClick: () => toast.info("Report issue..."),
                  },
                  { divider: true, label: "" },
                  {
                    label: "View License",
                    onClick: () => toast.info("MIT License"),
                  },
                  {
                    label: "Privacy Statement",
                    onClick: () => toast.info("Your data is safe!"),
                  },
                  { divider: true, label: "" },
                  {
                    label: "Toggle Developer Tools",
                    onClick: () => toast.info("Developer tools..."),
                  },
                  {
                    label: "Open Process Explorer",
                    onClick: () => toast.info("Process explorer..."),
                  },
                  { divider: true, label: "" },
                  {
                    label: "Check for Updates...",
                    onClick: () => toast.success("You are up to date!"),
                  },
                  {
                    label: "About",
                    onClick: () =>
                      toast.info("Terminal Portfolio v1.0.0 - Built with ❤️"),
                  },
                ],
              },
            ]}
            isOpen={activeMenu === "more"}
            onToggle={() =>
              setActiveMenu(activeMenu === "more" ? null : "more")
            }
            onClose={() => setActiveMenu(null)}
          />

          {/* Navigation Arrows */}
          <div className="flex items-center ml-2">
            <button
              className="p-1 text-[#858585] hover:text-white"
              title="Go Back"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              className="p-1 text-[#858585] hover:text-white"
              title="Go Forward"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Title */}
        <div className="flex-1 text-center text-[#cccccc] text-xs">
          {selectedFile?.name} - {selectedProject.name} - Visual Studio Code
        </div>

        {/* Layout Controls & Window Controls */}
        <div className="flex items-center gap-1">
          {/* Layout Toggle Icons */}
          <div className="flex items-center gap-0.5 mr-2 border-r border-[#454545] pr-2">
            <button
              onClick={() => setShowSidebar((prev) => !prev)}
              className={`p-1 ${showSidebar ? "text-white bg-[#3c3c3c]" : "text-[#858585]"} hover:text-white hover:bg-[#3c3c3c] rounded`}
              title="Toggle Primary Side Bar (Ctrl+B)"
            >
              <PanelLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setShowTerminal((prev) => !prev)}
              className={`p-1 ${showTerminal ? "text-white bg-[#3c3c3c]" : "text-[#858585]"} hover:text-white hover:bg-[#3c3c3c] rounded`}
              title="Toggle Panel (Ctrl+J)"
            >
              <PanelBottom className="w-4 h-4" />
            </button>
            <button
              onClick={() => setShowRightSidebar((prev) => !prev)}
              className={`p-1 ${showRightSidebar ? "text-white bg-[#3c3c3c]" : "text-[#858585]"} hover:text-white hover:bg-[#3c3c3c] rounded`}
              title="Toggle Secondary Side Bar"
            >
              <PanelRight className="w-4 h-4" />
            </button>
            <button
              className="p-1 text-[#858585] hover:text-white hover:bg-[#3c3c3c] rounded"
              title="Customize Layout"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
          </div>

          {/* Run Button */}
          {selectedProject.liveUrl && (
            <button
              onClick={handleRunProject}
              className="flex items-center gap-1 px-2 py-0.5 text-xs bg-[#0e639c] text-white rounded hover:bg-[#1177bb]"
            >
              <Play className="w-3 h-3" />
              Run
            </button>
          )}

          {/* Window Controls */}
          <div className="flex items-center gap-0.5 ml-2">
            <button className="p-1.5 text-[#858585] hover:bg-[#3c3c3c]">
              <Minimize2 className="w-3 h-3" />
            </button>
            <button className="p-1.5 text-[#858585] hover:bg-[#3c3c3c]">
              <Maximize2 className="w-3 h-3" />
            </button>
            <button
              onClick={handleClose}
              className="p-1.5 text-[#858585] hover:bg-[#e81123] hover:text-white"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Editor Area */}
      <div className="flex flex-1 min-h-0">
        {/* Activity Bar */}
        <div className="w-12 bg-[#333333] flex flex-col items-center py-2 border-r border-[#252526]">
          <button
            onClick={() => setShowSidebar((prev) => !prev)}
            className={`p-2.5 ${showSidebar ? "text-white bg-[#252526] border-l-2 border-white" : "text-[#858585] hover:text-white"}`}
            title="Explorer"
          >
            <FileText className="w-5 h-5" />
          </button>
          <button
            className="p-2.5 text-[#858585] hover:text-white"
            title="Search"
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            className="p-2.5 text-[#858585] hover:text-white"
            title="Source Control"
          >
            <GitBranch className="w-5 h-5" />
          </button>
          <button
            className="p-2.5 text-[#858585] hover:text-white"
            title="Extensions"
          >
            <Package className="w-5 h-5" />
          </button>
          <div className="flex-1" />
          <button
            onClick={() => setShowTerminal((prev) => !prev)}
            className={`p-2.5 ${showTerminal ? "text-white" : "text-[#858585]"} hover:text-white`}
            title="Terminal"
          >
            <TerminalIcon className="w-5 h-5" />
          </button>
          <button
            className="p-2.5 text-[#858585] hover:text-white"
            title="Settings"
          >
            <Settings className="w-5 h-5" />
          </button>
        </div>

        {/* Sidebar - Explorer */}
        {showSidebar && (
          <div className="w-60 bg-[#252526] border-r border-[#1e1e1e] flex flex-col">
            <div className="flex items-center justify-between px-4 py-2 text-[11px] uppercase text-[#bbbbbb] font-medium tracking-wider">
              <span>Explorer</span>
              <div className="flex items-center gap-0.5">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={() => handleNewFile(null)}
                      className="p-1 hover:bg-[#3c3c3c] rounded"
                    >
                      <FilePlus className="w-4 h-4" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>New File...</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={() => handleNewFolder(null)}
                      className="p-1 hover:bg-[#3c3c3c] rounded"
                    >
                      <FolderPlus className="w-4 h-4" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>New Folder...</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={() => {
                        setProjectFiles([...selectedProject.files]);
                        toast.success("Refreshed");
                      }}
                      className="p-1 hover:bg-[#3c3c3c] rounded"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>Refresh Explorer</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={() => setExpanded({})}
                      className="p-1 hover:bg-[#3c3c3c] rounded"
                    >
                      <ChevronsDownUp className="w-4 h-4" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>Collapse Folders in Explorer</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>

            {/* Search/Filter Input */}
            <div className="px-2 py-1.5">
              <div className="relative">
                <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-[#858585]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter files..."
                  className="w-full pl-8 pr-8 py-1.5 bg-[#3c3c3c] text-[#cccccc] text-sm rounded border border-transparent focus:border-[#007acc] outline-none placeholder-[#858585]"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-0.5 hover:bg-[#4c4c4c] rounded"
                  >
                    <X className="w-3 h-3 text-[#858585]" />
                  </button>
                )}
              </div>
              {searchQuery && (
                <div className="mt-1 text-[10px] text-[#858585] flex items-center gap-1">
                  <Filter className="w-3 h-3" />
                  {filteredFiles.length} result
                  {filteredFiles.length !== 1 ? "s" : ""}
                </div>
              )}
            </div>

            {/* Context Menu */}
            {contextMenu && (
              <ContextMenu
                x={contextMenu.x}
                y={contextMenu.y}
                file={contextMenu.file}
                isFolder={contextMenu.file?.type === "folder"}
                onClose={() => setContextMenu(null)}
                onNewFile={() => {
                  const folder =
                    contextMenu.file?.type === "folder"
                      ? contextMenu.file
                      : null;
                  handleNewFile(folder);
                  setContextMenu(null);
                }}
                onNewFolder={() => {
                  const folder =
                    contextMenu.file?.type === "folder"
                      ? contextMenu.file
                      : null;
                  handleNewFolder(folder);
                  setContextMenu(null);
                }}
                onDelete={() => {
                  if (contextMenu.file) handleDeleteFile(contextMenu.file);
                  setContextMenu(null);
                }}
                onRename={() => {
                  if (contextMenu.file) {
                    setRenamingFile(contextMenu.file);
                    setRenameValue(contextMenu.file.name);
                  }
                  setContextMenu(null);
                }}
                onCopy={() => {
                  if (contextMenu.file)
                    setClipboardFile({
                      file: contextMenu.file,
                      action: "copy",
                    });
                  toast.success("Copied");
                  setContextMenu(null);
                }}
                onCut={() => {
                  if (contextMenu.file)
                    setClipboardFile({ file: contextMenu.file, action: "cut" });
                  toast.success("Cut");
                  setContextMenu(null);
                }}
                onPaste={() => {
                  toast.info("Paste");
                  setContextMenu(null);
                }}
                onOpenInTerminal={() => {
                  setShowTerminal(true);
                  setContextMenu(null);
                }}
              />
            )}

            {/* New File Input */}
            {showNewFileInput && (
              <div className="px-2 py-1">
                {targetFolder && (
                  <div className="text-xs text-[#858585] mb-1">
                    Creating in: {targetFolder.name}/
                  </div>
                )}
                <input
                  type="text"
                  value={newItemName}
                  onChange={(e) => setNewItemName(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleCreateNewFile();
                    if (e.key === "Escape") {
                      setShowNewFileInput(false);
                      setNewItemName("");
                      setTargetFolder(null);
                    }
                  }}
                  onBlur={() => {
                    setShowNewFileInput(false);
                    setNewItemName("");
                    setTargetFolder(null);
                  }}
                  placeholder="filename.tsx"
                  className="w-full px-2 py-1 bg-[#3c3c3c] text-[#cccccc] text-sm border border-[#007acc] rounded outline-none"
                  autoFocus
                />
              </div>
            )}

            {/* New Folder Input */}
            {showNewFolderInput && (
              <div className="px-2 py-1">
                {targetFolder && (
                  <div className="text-xs text-[#858585] mb-1">
                    Creating in: {targetFolder.name}/
                  </div>
                )}
                <input
                  type="text"
                  value={newItemName}
                  onChange={(e) => setNewItemName(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleCreateNewFolder();
                    if (e.key === "Escape") {
                      setShowNewFolderInput(false);
                      setNewItemName("");
                      setTargetFolder(null);
                    }
                  }}
                  onBlur={() => {
                    setShowNewFolderInput(false);
                    setNewItemName("");
                    setTargetFolder(null);
                  }}
                  placeholder="folder-name"
                  className="w-full px-2 py-1 bg-[#3c3c3c] text-[#cccccc] text-sm border border-[#007acc] rounded outline-none"
                  autoFocus
                />
              </div>
            )}

            <div className="px-2">
              <div className="flex items-center gap-1 px-2 py-1 text-xs text-[#cccccc] font-semibold uppercase tracking-wider">
                <ChevronDown className="w-3 h-3" />
                <span>{selectedProject.name}</span>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto">
              <FileTree
                files={filteredFiles}
                onFileSelect={handleFileSelect}
                selectedFile={selectedFile}
                onDeleteFile={handleDeleteFile}
                onContextMenu={(e, file) => {
                  e.preventDefault();
                  setContextMenu({ x: e.clientX, y: e.clientY, file });
                }}
                expanded={
                  searchQuery
                    ? Object.fromEntries(
                        filteredFiles
                          .flatMap(function getAllFolderNames(
                            f: ProjectFile,
                          ): string[] {
                            if (f.type === "folder") {
                              return [
                                f.name,
                                ...(f.children?.flatMap(getAllFolderNames) ||
                                  []),
                              ];
                            }
                            return [];
                          })
                          .map((name) => [name, true]),
                      )
                    : expanded
                }
                setExpanded={setExpanded}
                renamingFile={renamingFile}
                renameValue={renameValue}
                setRenameValue={setRenameValue}
                onRenameSubmit={handleRenameFile}
                onRenameStart={(file) => {
                  setRenamingFile(file);
                  setRenameValue(file.name);
                }}
              />
            </div>

            {/* Outline Section */}
            <div className="border-t border-[#1e1e1e]">
              <div className="flex items-center gap-1 px-4 py-1 text-[11px] uppercase text-[#bbbbbb] font-medium">
                <ChevronRight className="w-3 h-3" />
                Outline
              </div>
            </div>
            <div className="border-t border-[#1e1e1e]">
              <div className="flex items-center gap-1 px-4 py-1 text-[11px] uppercase text-[#bbbbbb] font-medium">
                <ChevronRight className="w-3 h-3" />
                Timeline
              </div>
            </div>
          </div>
        )}

        {/* Editor + Terminal Area */}
        <div className="flex-1 flex flex-col min-w-0 bg-[#1e1e1e]">
          {/* Editor Area */}
          <div
            className={`flex-1 flex flex-col min-h-0 ${showTerminal ? "h-[60%]" : ""}`}
          >
            {/* Tabs Bar */}
            <div className="flex items-center bg-[#252526] border-b border-[#1e1e1e]">
              <div className="flex-1 flex items-center overflow-x-auto">
                {openTabs.map((tab) => (
                  <div
                    key={tab.name}
                    onClick={() => setSelectedFile(tab)}
                    className={`flex items-center gap-2 px-3 py-1.5 cursor-pointer border-r border-[#252526] ${
                      selectedFile?.name === tab.name
                        ? "bg-[#1e1e1e]"
                        : "bg-[#2d2d2d] hover:bg-[#2a2a2a]"
                    }`}
                  >
                    <File
                      className={`w-4 h-4 ${tab.name.endsWith(".tsx") || tab.name.endsWith(".ts") ? "text-blue-400" : "text-[#cccccc]"}`}
                    />
                    <span className="text-sm text-[#cccccc] whitespace-nowrap">
                      {tab.name}
                      {modifiedFiles.has(tab.name) && (
                        <span className="text-white ml-1">●</span>
                      )}
                    </span>
                    <button
                      className="p-0.5 hover:bg-[#3c3c3c] rounded"
                      onClick={(e) => handleTabClose(tab, e)}
                    >
                      <X className="w-3 h-3 text-[#858585]" />
                    </button>
                  </div>
                ))}
              </div>
              {/* Split View Button */}
              <button
                onClick={handleSplitEditor}
                className={`p-2 mx-1 hover:bg-[#3c3c3c] rounded ${splitView ? "text-white bg-[#3c3c3c]" : "text-[#858585]"}`}
                title="Split Editor (Ctrl+\\)"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>

            {/* Breadcrumb */}
            {selectedFile && (
              <div className="flex items-center gap-1 px-4 py-1 bg-[#1e1e1e] text-xs text-[#cccccc] border-b border-[#252526]">
                <span>{selectedProject.name}</span>
                <ChevronRight className="w-3 h-3" />
                <span>src</span>
                <ChevronRight className="w-3 h-3" />
                <span className="text-[#e8e8e8]">{selectedFile.name}</span>
              </div>
            )}

            {/* Monaco Editor(s) - Split View Support */}
            <div
              className={`flex-1 min-h-0 flex ${splitView ? "flex-row" : ""}`}
            >
              {/* Primary Editor */}
              <div
                className={`${splitView ? "w-1/2 border-r border-[#454545]" : "w-full"} h-full`}
              >
                {selectedFile ? (
                  <Editor
                    height="100%"
                    language={getMonacoLanguage(selectedFile)}
                    value={getFileContent(selectedFile)}
                    onChange={handleEditorChange}
                    theme="vs-dark"
                    onMount={(editor) => {
                      editorRef.current = editor;
                    }}
                    options={{
                      readOnly: false,
                      minimap: { enabled: !splitView },
                      fontSize: 14,
                      fontFamily:
                        "JetBrains Mono, Fira Code, Consolas, monospace",
                      padding: { top: 16 },
                      scrollBeyondLastLine: false,
                      wordWrap: "on",
                      automaticLayout: true,
                      lineNumbers: "on",
                      renderLineHighlight: "line",
                      cursorBlinking: "smooth",
                      smoothScrolling: true,
                    }}
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-[#858585]">
                    <div className="text-center">
                      <FileText className="w-16 h-16 mx-auto mb-4 opacity-30" />
                      <p>Select a file to view</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Secondary Editor (Split View) */}
              {splitView && (
                <div className="w-1/2 h-full flex flex-col">
                  {/* Secondary Tabs */}
                  <div className="flex items-center bg-[#252526] border-b border-[#1e1e1e]">
                    {openTabs
                      .filter((t) => t.name !== selectedFile?.name)
                      .map((tab) => (
                        <div
                          key={tab.name}
                          onClick={() => setSecondaryFile(tab)}
                          className={`flex items-center gap-2 px-3 py-1.5 cursor-pointer border-r border-[#252526] ${
                            secondaryFile?.name === tab.name
                              ? "bg-[#1e1e1e]"
                              : "bg-[#2d2d2d] hover:bg-[#2a2a2a]"
                          }`}
                        >
                          <File
                            className={`w-4 h-4 ${tab.name.endsWith(".tsx") || tab.name.endsWith(".ts") ? "text-blue-400" : "text-[#cccccc]"}`}
                          />
                          <span className="text-sm text-[#cccccc] whitespace-nowrap">
                            {tab.name}
                          </span>
                        </div>
                      ))}
                  </div>
                  <div className="flex-1">
                    {secondaryFile ? (
                      <Editor
                        height="100%"
                        language={getMonacoLanguage(secondaryFile)}
                        value={getFileContent(secondaryFile)}
                        onChange={handleSecondaryEditorChange}
                        theme="vs-dark"
                        onMount={(editor) => {
                          secondaryEditorRef.current = editor;
                        }}
                        options={{
                          readOnly: false,
                          minimap: { enabled: false },
                          fontSize: 14,
                          fontFamily:
                            "JetBrains Mono, Fira Code, Consolas, monospace",
                          padding: { top: 16 },
                          scrollBeyondLastLine: false,
                          wordWrap: "on",
                          automaticLayout: true,
                          lineNumbers: "on",
                          renderLineHighlight: "line",
                          cursorBlinking: "smooth",
                          smoothScrolling: true,
                        }}
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-[#858585]">
                        <p className="text-sm">Select a file for split view</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Integrated Terminal Panel */}
          {showTerminal && (
            <div className="h-[40%] border-t border-[#454545]">
              <IntegratedTerminal
                projectName={selectedProject.id}
                onRunCommand={handleTerminalCommand}
                terminalHistory={terminalHistory}
              />
            </div>
          )}

          {/* Status Bar */}
          <div className="flex items-center justify-between px-2 py-0.5 bg-[#007acc] text-white text-xs">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <GitBranch className="w-3 h-3" />
                main
              </span>
              <span>0 ⚠ 0</span>
              {splitView && <span className="text-yellow-300">Split View</span>}
            </div>
            <div className="flex items-center gap-3">
              <span>Ln 1, Col 1</span>
              <span>Spaces: 2</span>
              <span>UTF-8</span>
              <span>TypeScript React</span>
            </div>
          </div>
        </div>

        {/* Right Sidebar Icons */}
        {showRightSidebar && (
          <div className="w-12 bg-[#333333] flex flex-col items-center py-2 border-l border-[#252526]">
            <button
              onClick={handleSplitEditor}
              className={`p-2.5 ${splitView ? "text-white" : "text-[#858585]"} hover:text-white`}
              title="Split Editor"
            >
              <Layers className="w-5 h-5" />
            </button>
            <button
              onClick={() => setShowTerminal((prev) => !prev)}
              className={`p-2.5 ${showTerminal ? "text-white" : "text-[#858585]"} hover:text-white`}
              title="Terminal"
            >
              <TerminalIcon className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      {/* Keyboard Shortcuts Popup */}
      {showShortcuts && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
          onClick={() => setShowShortcuts(false)}
        >
          <div
            className="bg-[#252526] border border-[#454545] rounded-lg shadow-2xl max-w-2xl w-full mx-4 max-h-[80vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#454545]">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#007acc] rounded-lg">
                  <Keyboard className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-white">
                    Keyboard Shortcuts
                  </h2>
                  <p className="text-xs text-[#858585]">
                    Press Ctrl+? to toggle this popup
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowShortcuts(false)}
                className="p-2 hover:bg-[#3c3c3c] rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-[#858585]" />
              </button>
            </div>

            {/* Shortcuts List */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* File Operations */}
                <div>
                  <h3 className="text-sm font-semibold text-[#007acc] mb-3 flex items-center gap-2">
                    <File className="w-4 h-4" />
                    File Operations
                  </h3>
                  <div className="space-y-2">
                    {[
                      { keys: "Ctrl + S", desc: "Save current file" },
                      { keys: "Ctrl + Shift + S", desc: "Save all files" },
                      { keys: "Ctrl + N", desc: "New file" },
                      { keys: "Ctrl + O", desc: "Open file" },
                      { keys: "Ctrl + F4", desc: "Close editor" },
                    ].map((shortcut, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between py-1.5 px-2 rounded hover:bg-[#2a2d2e]"
                      >
                        <span className="text-sm text-[#cccccc]">
                          {shortcut.desc}
                        </span>
                        <kbd className="px-2 py-1 bg-[#3c3c3c] text-[#cccccc] text-xs rounded border border-[#555] font-mono">
                          {shortcut.keys}
                        </kbd>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Editing */}
                <div>
                  <h3 className="text-sm font-semibold text-[#007acc] mb-3 flex items-center gap-2">
                    <Edit3 className="w-4 h-4" />
                    Editing
                  </h3>
                  <div className="space-y-2">
                    {[
                      { keys: "Ctrl + Z", desc: "Undo" },
                      { keys: "Ctrl + Y", desc: "Redo" },
                      { keys: "Ctrl + X", desc: "Cut" },
                      { keys: "Ctrl + C", desc: "Copy" },
                      { keys: "Ctrl + V", desc: "Paste" },
                      { keys: "Ctrl + /", desc: "Toggle comment" },
                    ].map((shortcut, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between py-1.5 px-2 rounded hover:bg-[#2a2d2e]"
                      >
                        <span className="text-sm text-[#cccccc]">
                          {shortcut.desc}
                        </span>
                        <kbd className="px-2 py-1 bg-[#3c3c3c] text-[#cccccc] text-xs rounded border border-[#555] font-mono">
                          {shortcut.keys}
                        </kbd>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation */}
                <div>
                  <h3 className="text-sm font-semibold text-[#007acc] mb-3 flex items-center gap-2">
                    <Search className="w-4 h-4" />
                    Search & Navigation
                  </h3>
                  <div className="space-y-2">
                    {[
                      { keys: "Ctrl + F", desc: "Find in file" },
                      { keys: "Ctrl + H", desc: "Replace" },
                      { keys: "Ctrl + G", desc: "Go to line" },
                      { keys: "Ctrl + P", desc: "Quick open file" },
                      { keys: "Ctrl + Shift + P", desc: "Command palette" },
                    ].map((shortcut, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between py-1.5 px-2 rounded hover:bg-[#2a2d2e]"
                      >
                        <span className="text-sm text-[#cccccc]">
                          {shortcut.desc}
                        </span>
                        <kbd className="px-2 py-1 bg-[#3c3c3c] text-[#cccccc] text-xs rounded border border-[#555] font-mono">
                          {shortcut.keys}
                        </kbd>
                      </div>
                    ))}
                  </div>
                </div>

                {/* View & Panels */}
                <div>
                  <h3 className="text-sm font-semibold text-[#007acc] mb-3 flex items-center gap-2">
                    <LayoutGrid className="w-4 h-4" />
                    View & Panels
                  </h3>
                  <div className="space-y-2">
                    {[
                      { keys: "Ctrl + B", desc: "Toggle sidebar" },
                      { keys: "Ctrl + `", desc: "Toggle terminal" },
                      { keys: "Ctrl + \\", desc: "Split editor" },
                      { keys: "F2", desc: "Rename file" },
                      { keys: "Ctrl + ?", desc: "Show shortcuts" },
                      { keys: "Esc", desc: "Close popup/cancel" },
                    ].map((shortcut, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between py-1.5 px-2 rounded hover:bg-[#2a2d2e]"
                      >
                        <span className="text-sm text-[#cccccc]">
                          {shortcut.desc}
                        </span>
                        <kbd className="px-2 py-1 bg-[#3c3c3c] text-[#cccccc] text-xs rounded border border-[#555] font-mono">
                          {shortcut.keys}
                        </kbd>
                      </div>
                    ))}
                  </div>
                </div>

                {/* File Explorer */}
                <div className="md:col-span-2">
                  <h3 className="text-sm font-semibold text-[#007acc] mb-3 flex items-center gap-2">
                    <FolderOpen className="w-4 h-4" />
                    File Explorer
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {[
                      { keys: "Double-click", desc: "Rename file/folder" },
                      { keys: "Delete", desc: "Delete file" },
                      { keys: "Drag & Drop", desc: "Move file to folder" },
                      { keys: "Right-click", desc: "Context menu" },
                    ].map((shortcut, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between py-1.5 px-2 rounded hover:bg-[#2a2d2e]"
                      >
                        <span className="text-sm text-[#cccccc]">
                          {shortcut.desc}
                        </span>
                        <kbd className="px-2 py-1 bg-[#3c3c3c] text-[#cccccc] text-xs rounded border border-[#555] font-mono">
                          {shortcut.keys}
                        </kbd>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-3 border-t border-[#454545] bg-[#1e1e1e]">
              <p className="text-xs text-[#858585] text-center">
                Press{" "}
                <kbd className="px-1.5 py-0.5 bg-[#3c3c3c] rounded text-[#cccccc] mx-1">
                  Esc
                </kbd>{" "}
                or click outside to close
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
