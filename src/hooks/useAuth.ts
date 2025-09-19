import { useEffect, useState } from "react";
import type { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

export const useAuth = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        const { data, error: getErr } = await supabase.auth.getSession();
        if (!isMounted) return;
        if (getErr) throw getErr;
        setSession(data.session ?? null);
        setUser(data.session?.user ?? null);
      } catch (e: any) {
        if (!isMounted) return;
        setError(e.message || "Failed to get session");
      } finally {
        if (isMounted) setLoading(false);
      }
    })();

    const { data: sub } = supabase.auth.onAuthStateChange((_, newSession) => {
      setSession(newSession);
      setUser(newSession?.user ?? null);
    });

    return () => {
      isMounted = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  const signInWithPassword = async (email: string, password: string) => {
    setError(null);
    const { data, error: err } = await supabase.auth.signInWithPassword({ email, password });
    if (err) throw err;
    setSession(data.session);
    setUser(data.user);
    return data;
  };

  const signUpWithPassword = async (email: string, password: string) => {
    setError(null);
    const { data, error: err } = await supabase.auth.signUp({ email, password });
    if (err) throw err;
    return data;
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return { session, user, loading, error, signInWithPassword, signUpWithPassword, signOut };
};




