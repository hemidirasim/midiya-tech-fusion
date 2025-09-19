import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";

type Task = {
  id: string;
  title: string;
  description: string | null;
  status: "open" | "in_progress" | "done";
  created_at: string;
};

const Panel = () => {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    if (!loading && !user) navigate("/login");
  }, [loading, user, navigate]);

  useEffect(() => {
    if (!user) return;
    (async () => {
      const { data } = await supabase
        .from("client_tasks")
        .select("id, title, description, status, created_at")
        .order("created_at", { ascending: false });
      setTasks((data as any) ?? []);
    })();
  }, [user]);

  const submitTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    setSubmitting(true);
    const { data, error } = await supabase
      .from("client_tasks")
      .insert({ title, description: description || null })
      .select("id, title, description, status, created_at")
      .single();
    setSubmitting(false);
    if (error) return alert(error.message);
    setTasks((prev) => [data as any, ...prev]);
    setTitle("");
    setDescription("");
  };

  if (!user) return null;

  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Client Panel</h1>
        <Button variant="outline" onClick={signOut}>Sign out</Button>
      </div>

      <form onSubmit={submitTask} className="grid gap-3 max-w-2xl">
        <div>
          <label className="text-sm">Task title</label>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label className="text-sm">Description</label>
          <Textarea rows={4} value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <Button type="submit" disabled={submitting}>{submitting ? "Sending..." : "Create task"}</Button>
      </form>

      <div className="mt-10">
        <h2 className="text-xl font-medium mb-4">Your tasks</h2>
        <div className="grid gap-3">
          {tasks.map((t) => (
            <div key={t.id} className="border rounded-lg p-4 bg-card">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{t.title}</h3>
                <span className="text-xs uppercase tracking-wide opacity-70">{t.status}</span>
              </div>
              {t.description && <p className="text-sm mt-1">{t.description}</p>}
              <p className="text-xs text-muted-foreground mt-2">{new Date(t.created_at).toLocaleString()}</p>
            </div>
          ))}
          {tasks.length === 0 && <p className="text-sm text-muted-foreground">No tasks yet.</p>}
        </div>
      </div>
    </div>
  );
};

export default Panel;




