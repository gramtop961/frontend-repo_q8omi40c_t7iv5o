import React from 'react';
import { X, Smartphone } from 'lucide-react';
import { QRCodeCanvas } from 'qrcode.react';
import { site } from '../data/siteData';

export default function BookingModal({ open, onClose }) {
  if (!open) return null;
  const downloadUrl = site.stores.android; // use Android for QR; links provided separately
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" aria-hidden onClick={onClose} />
      <div className="relative w-[92vw] max-w-lg rounded-2xl bg-white shadow-xl p-6">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-md bg-gray-100 hover:bg-gray-200"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-2 text-indigo-600 font-medium">
          <Smartphone className="h-5 w-5" />
          Book With Spotles App
        </div>
        <h3 className="mt-2 text-xl font-semibold text-gray-900">Download our mobile app to book instantly</h3>
        <p className="mt-1 text-sm text-gray-600">No login required on this site. All bookings through the official app.</p>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <div className="flex flex-col items-center justify-center rounded-xl border border-gray-200 p-4">
            <QRCodeCanvas value={downloadUrl} size={140} includeMargin />
            <p className="mt-2 text-xs text-gray-500">Scan to download</p>
          </div>
          <div className="space-y-3">
            <a
              href={site.stores.android}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center rounded-lg bg-black text-white px-4 py-3"
            >
              Get it on Google Play
            </a>
            <a
              href={site.stores.ios}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center rounded-lg bg-gray-900 text-white px-4 py-3"
            >
              Download on the App Store
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
