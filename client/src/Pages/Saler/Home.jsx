import React, { useState, useMemo } from "react";

// Single-file Admin Page (Tailwind + JSX)
// - Save as: src/Pages/AdminPage.jsx
// - Requires TailwindCSS configured in your project
// - This is a fully self-contained UI with mock data and actions (CRUD, search, pagination, modals)

export default function SalerPage() {
  // ----- sample data -----
  const initialUsers = [
    { id: 1, name: "Nguyễn Văn A", email: "a@example.com", role: "Admin" },
    { id: 2, name: "Trần Thị B", email: "b@example.com", role: "Manager" },
    { id: 3, name: "Lê Văn C", email: "c@example.com", role: "User" },
    { id: 4, name: "Phạm D", email: "d@example.com", role: "User" },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 5;

  // modal state
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  // sidebar
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // quick metrics (derived)
  const metrics = useMemo(() => {
    const total = users.length;
    const admins = users.filter((u) => u.role === "Admin").length;
    const managers = users.filter((u) => u.role === "Manager").length;
    return { total, admins, managers };
  }, [users]);

  // search + pagination
  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(query.toLowerCase()) ||
      u.email.toLowerCase().includes(query.toLowerCase()) ||
      u.role.toLowerCase().includes(query.toLowerCase())
  );
  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const pageItems = filtered.slice((page - 1) * perPage, page * perPage);

  // handlers
  function openCreate() {
    setEditingUser({ name: "", email: "", role: "User" });
    setModalOpen(true);
  }
  function openEdit(u) {
    setEditingUser({ ...u });
    setModalOpen(true);
  }
  function saveUser(data) {
    if (data.id) {
      setUsers((prev) => prev.map((p) => (p.id === data.id ? data : p)));
    } else {
      const id = Date.now();
      setUsers((prev) => [{ ...data, id }, ...prev]);
    }
    setModalOpen(false);
  }
  function deleteUser(id) {
    if (!confirm("Bạn có chắc muốn xoá user này?")) return;
    setUsers((prev) => prev.filter((p) => p.id !== id));
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? "w-64" : "w-16"
          } transition-width duration-200 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 h-screen p-4 flex flex-col`}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="bg-indigo-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center">A</div>
              {sidebarOpen && <div className="font-semibold">Admin</div>}
            </div>
            <button
              className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => setSidebarOpen((s) => !s)}
              aria-label="Toggle sidebar"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          <nav className="flex-1">
            <ul className="space-y-1">
              <li>
                <a className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18" />
                  </svg>
                  {sidebarOpen && <span>Dashboard</span>}
                </a>
              </li>
              <li>
                <a className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 20l9-5-9-5-9 5 9 5z" />
                  </svg>
                  {sidebarOpen && <span>Orders</span>}
                </a>
              </li>
              <li>
                <a className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" />
                  </svg>
                  {sidebarOpen && <span>Products</span>}
                </a>
              </li>
              <li>
                <a className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                  {sidebarOpen && <span>Settings</span>}
                </a>
              </li>
            </ul>
          </nav>

          <div className="mt-4">
            {sidebarOpen && (
              <div className="text-xs text-gray-500">© {new Date().getFullYear()} MyApp</div>
            )}
          </div>
        </aside>

        <main className="flex-1 p-6">
          {/* Topbar */}
          <header className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-semibold">Dashboard</h1>
              <div className="hidden sm:block text-sm text-gray-500">Tổng quan hệ thống</div>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="border rounded px-3 py-2 text-sm w-48 bg-white dark:bg-gray-800"
                  placeholder="Tìm kiếm user, email..."
                />
                <button
                  onClick={() => { setQuery(""); setPage(1); }}
                  className="absolute right-1 top-1/2 -translate-y-1/2 text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-700"
                >
                  Clear
                </button>
              </div>

              <button onClick={openCreate} className="bg-indigo-600 text-white px-4 py-2 rounded shadow hover:opacity-95">Tạo user</button>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">MB</div>
              </div>
            </div>
          </header>

          {/* Metrics */}
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <MetricCard title="Total users" value={metrics.total} subtitle="Tổng số người dùng" />
            <MetricCard title="Admins" value={metrics.admins} subtitle="Quyền quản trị" />
            <MetricCard title="Managers" value={metrics.managers} subtitle="Quản lý" />
          </section>

          {/* Main content split */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-lg font-semibold">Users</h2>
                  <div className="text-sm text-gray-500">{filtered.length} results</div>
                </div>

                <UsersTable
                  items={pageItems}
                  onEdit={openEdit}
                  onDelete={deleteUser}
                />

                <Pagination
                  page={page}
                  totalPages={totalPages}
                  onChange={(p) => setPage(p)}
                />
              </div>

              <div className="mt-6 bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
                <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                  <div className="rounded p-3 bg-gray-50 dark:bg-gray-900">User <b>Nguyễn Văn A</b> đã đăng nhập 2 giờ trước</div>
                  <div className="rounded p-3 bg-gray-50 dark:bg-gray-900">Order #2374 đã được tạo</div>
                </div>
              </div>
            </div>

            <aside>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 mb-4">
                <h3 className="font-semibold mb-2">Sales (this month)</h3>
                <MiniChart />
                <div className="mt-3 text-sm text-gray-500">Doanh thu: <b>$12,345</b></div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold mb-2">Quick actions</h3>
                <div className="flex flex-col gap-2">
                  <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">Export CSV</button>
                  <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">Sync</button>
                </div>
              </div>
            </aside>
          </div>

          {/* Footer */}
          <footer className="mt-8 text-center text-xs text-gray-500">Built with ♥ using Tailwind · Demo data only</footer>
        </main>
      </div>

      {/* Modal (create / edit) */}
      {isModalOpen && (
        <Modal onClose={() => setModalOpen(false)}>
          <UserForm initial={editingUser} onCancel={() => setModalOpen(false)} onSave={saveUser} />
        </Modal>
      )}
    </div>
  );
}

// ---------------- helper components ----------------
function MetricCard({ title, value, subtitle }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="mt-2 text-2xl font-semibold">{value}</div>
      <div className="mt-1 text-xs text-gray-400">{subtitle}</div>
    </div>
  );
}

function UsersTable({ items, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm table-auto">
        <thead>
          <tr className="text-left text-xs text-gray-500">
            <th className="py-2">Name</th>
            <th className="py-2">Email</th>
            <th className="py-2">Role</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((u) => (
            <tr key={u.id} className="border-t border-gray-100 dark:border-gray-700">
              <td className="py-3">{u.name}</td>
              <td className="py-3">{u.email}</td>
              <td className="py-3">{u.role}</td>
              <td className="py-3">
                <div className="flex items-center gap-2">
                  <button onClick={() => onEdit(u)} className="px-2 py-1 text-xs rounded bg-yellow-100">Edit</button>
                  <button onClick={() => onDelete(u.id)} className="px-2 py-1 text-xs rounded bg-red-100">Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Pagination({ page, totalPages, onChange }) {
  return (
    <div className="mt-4 flex items-center justify-between">
      <div className="text-sm text-gray-500">Page {page} / {totalPages}</div>
      <div className="flex gap-2">
        <button onClick={() => onChange(Math.max(1, page - 1))} className="px-3 py-1 rounded bg-gray-100">Prev</button>
        <button onClick={() => onChange(Math.min(totalPages, page + 1))} className="px-3 py-1 rounded bg-gray-100">Next</button>
      </div>
    </div>
  );
}

function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose}></div>
      <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-md shadow-lg">
        {children}
      </div>
    </div>
  );
}

function UserForm({ initial, onCancel, onSave }) {
  const [form, setForm] = useState(initial || { name: "", email: "", role: "User" });

  function submit(e) {
    e.preventDefault();
    // basic validation
    if (!form.name || !form.email) {
      alert("Vui lòng điền tên và email");
      return;
    }
    onSave(form);
  }

  return (
    <form onSubmit={submit} className="space-y-3">
      <h3 className="text-lg font-semibold">{form.id ? "Edit user" : "Create user"}</h3>
      <div>
        <label className="text-sm">Name</label>
        <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full border rounded px-3 py-2 mt-1 bg-white dark:bg-gray-900" />
      </div>
      <div>
        <label className="text-sm">Email</label>
        <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full border rounded px-3 py-2 mt-1 bg-white dark:bg-gray-900" />
      </div>
      <div>
        <label className="text-sm">Role</label>
        <select value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} className="w-full border rounded px-3 py-2 mt-1 bg-white dark:bg-gray-900">
          <option>Admin</option>
          <option>Manager</option>
          <option>User</option>
        </select>
      </div>
      <div className="flex justify-end gap-2">
        <button type="button" onClick={onCancel} className="px-4 py-2 rounded bg-gray-100">Cancel</button>
        <button type="submit" className="px-4 py-2 rounded bg-indigo-600 text-white">Save</button>
      </div>
    </form>
  );
}

function MiniChart() {
  // simple sparkline using inline SVG
  return (
    <div className="w-full h-24">
      <svg viewBox="0 0 100 30" className="w-full h-full">
        <polyline fill="none" stroke="#6366F1" strokeWidth="2" points="0,25 20,18 40,12 60,8 80,10 100,6" />
      </svg>
    </div>
  );
}
