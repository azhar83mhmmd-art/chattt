// Riwayat panggilan: fitur panggilan belum diimplementasikan, ditampilkan secara jujur.
import { requireAuth } from './supabase.js';
import { $, icon, mountShell } from './utils.js';
const { profile } = await requireAuth({ shell: 'calls.html' });
mountShell('calls.html', profile.role === 'admin');
$('#body').innerHTML = `<div class="tabs" role="tablist" aria-label="Filter riwayat"><button class="tab" role="tab" aria-selected="true" disabled>Semua</button><button class="tab" role="tab" aria-selected="false" disabled>Masuk</button><button class="tab" role="tab" aria-selected="false" disabled>Keluar</button><button class="tab" role="tab" aria-selected="false" disabled>Tidak terjawab</button></div>
<div class="empty card">${icon('phone', 40)}<h3>Panggilan belum tersedia</h3><p>Panggilan suara dan video belum diaktifkan di ORVIX. Riwayat, durasi, dan tombol panggil kembali akan muncul di sini setelah fitur ini aktif.</p><p class="dim" style="margin-top:10px">Sementara itu, kamu tetap bisa chat dengan teman dari tab Chat.</p><a class="btn" href="chat.html" style="margin-top:14px">Buka Chat</a></div>`;
