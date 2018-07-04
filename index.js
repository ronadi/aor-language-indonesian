module.exports = {
    aor: {
        action: {
            delete: 'Hapus',
            show: 'Tampilkan',
            list: 'Daftar',
            save: 'Simpan',
            create: 'Buat',
            edit: 'Ubah',
            cancel: 'Batal',
            refresh: 'Perbaharui',
            add_filter: 'Tambahkan filter',
            remove_filter: 'Hapus filter',
            back: 'Kembali',
        },
        boolean: {
            true: 'Ya',
            false: 'Tidak',
        },
        page: {
            list: 'Daftar %{name}',
            edit: '%{name} %{id}',
            show: '%{name} %{id}',
            create: 'Buat %{name}',
            delete: 'Hapus %{name} %{id}',
            dashboard: 'Dasbor',
            not_found: 'Tidak ditemukan',
        },
        input: {
            autocomplete: {
                none: 'Tidak dilengkapi',
            },
            file: {
                upload_several: 'Letakan beberapa file untuk diunggah, atau klik untuk memilihnya.',
                upload_single: 'Letakan file yang akan diunggah, atau klik untuk memilihnya.',
            },
            image: {
                upload_several: 'Letakan beberapa gambar untuk diunggah, atau klik untuk memilihnya.',
                upload_single: 'Letakan gambar untuk diunggah, atau klik untuk memilihnya.',
            },
            references: {
                all_missing: 'Tidak dapat menemukan data referensi.',
                many_missing:
                    'Setidaknya satu referensi terkait tidak lagi tersedia.',
                single_missing:
                    'Referensi terkait tidak lagi tersedia',
            },
        },
        message: {
            yes: 'Ya',
            no: 'Tidak',
            are_you_sure: 'Apakah anda yakin?',
            about: 'Tentang',
            not_found: 'Entah Anda mengetikkan URL yang salah, atau Anda memiliki link yang salah.',
        },
        navigation: {
            no_results: 'Tidak ada hasil yang ditemukan',
            no_more_results: 'Halaman %{page} berada di luar batas. Coba halaman sebelumnya.',
            page_out_of_boundaries: 'Halaman ke %{page} di luar batas',
            page_out_from_end: 'Halaman terakhir',
            page_out_from_begin: 'Halaman harus lebih besar dari pertama',
            page_range_info: '%{offsetBegin}-%{offsetEnd} di %{total}',
            next: 'Berikutnya',
            prev: 'Sebelumnya',
        },
        auth: {
            username: 'Nama pengguna',
            password: 'Kata sandi',
            sign_in: 'Login',
            sign_in_error: 'Otentikasi gagal, coba lagi',
            logout: 'Logout',
        },
        notification: {
            updated: 'Elemen diperbaharui',
            created: 'Elemen dibuat',
            deleted: 'Elemen dihapus',
            item_doesnt_exist: 'Elemen tidak ada',
            http_error: 'Kesalahan komunikasi peladen',
            bad_item: 'Elemen salah',
        },
        validation: {
            required: 'wajib',
            minLength: 'Minimal %{min} karakter',
            maxLength: 'Maksimal %{max} karakter atau kurang',
            minValue: 'Minimal %{min}',
            maxValue: 'Maksimal %{max} atau kurang',
            number: 'Harus Angka',
            email: 'Harus alamat email yang valid',
        },
    },
};
