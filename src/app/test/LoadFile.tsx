'use client';
import React, { useState } from 'react';

const getProfileNames = (file_read: ArrayBuffer) => {
  const decoder = new TextDecoder('utf-8');
  const name1 = decoder.decode(
    new Int8Array(
      Array.from(new Uint16Array(file_read.slice(0x1901d0e, 0x1901d0e + 32)))
    )
  );
  const name2 = decoder.decode(
    new Int8Array(
      Array.from(new Uint16Array(file_read.slice(0x1901f5a, 0x1901f5a + 32)))
    )
  );
  const name3 = decoder.decode(
    new Int8Array(
      Array.from(new Uint16Array(file_read.slice(0x19021a6, 0x19021a6 + 32)))
    )
  );
  const name4 = decoder.decode(
    new Int8Array(
      Array.from(new Uint16Array(file_read.slice(0x19023f2, 0x19023f2 + 32)))
    )
  );
  const name5 = decoder.decode(
    new Int8Array(
      Array.from(new Uint16Array(file_read.slice(0x190263e, 0x190263e + 32)))
    )
  );
  const name6 = decoder.decode(
    new Int8Array(
      Array.from(new Uint16Array(file_read.slice(0x190288a, 0x190288a + 32)))
    )
  );
  const name7 = decoder.decode(
    new Int8Array(
      Array.from(new Uint16Array(file_read.slice(0x1902ad6, 0x1902ad6 + 32)))
    )
  );
  const name8 = decoder.decode(
    new Int8Array(
      Array.from(new Uint16Array(file_read.slice(0x1902d22, 0x1902d22 + 32)))
    )
  );
  const name9 = decoder.decode(
    new Int8Array(
      Array.from(new Uint16Array(file_read.slice(0x1902f6e, 0x1902f6e + 32)))
    )
  );
  const name10 = decoder.decode(
    new Int8Array(
      Array.from(new Uint16Array(file_read.slice(0x19031ba, 0x19031ba + 32)))
    )
  );

  const names = [
    name1,
    name2,
    name3,
    name4,
    name5,
    name6,
    name7,
    name8,
    name9,
    name10,
  ];
  names.forEach((name, index) => {
    names[index] = name.replaceAll('\x00', '');
  });
  return names;
};

function sanitizeImgName(name: string) {
  if (name.includes('Bell Bearing')) {
    return 'Bell Bearing';
  }
  if (name.includes('Note:')) {
    return 'Note';
  }
  let newName = name.replaceAll(':', '').replaceAll('?', '');
  const index = newName.search(' \\[');
  if (index > 0) newName = newName.substring(0, index);
  return newName;
}

const pattern = new Uint8Array([176, 173, 1, 0, 1, 255, 255, 255]);
const pattern2 = new Uint8Array([176, 173, 1, 0, 1]);

let slots = [];
let id_list = [];
let selected_slot = 1;
let lastList = [];
let dlcFile = false;

function split<T>(list_a: T[], chunk_size: number): T[][] {
  const splitted: T[][] = [];
  for (let i = 0; i < list_a.length; i += chunk_size) {
    const chunk = list_a.slice(i, i + chunk_size);
    splitted.push(chunk);
  }
  return splitted;
}

function get_slot_ls(dat: Uint8Array): Uint8Array[] {
  const slot1 = dat.subarray(0x00000310, 0x0028030f + 1);
  const slot2 = dat.subarray(0x00280320, 0x050031f + 1);
  const slot3 = dat.subarray(0x500330, 0x78032f + 1);
  const slot4 = dat.subarray(0x780340, 0xa0033f + 1);
  const slot5 = dat.subarray(0xa00350, 0xc8034f + 1);
  const slot6 = dat.subarray(0xc80360, 0xf0035f + 1);
  const slot7 = dat.subarray(0xf00370, 0x118036f + 1);
  const slot8 = dat.subarray(0x1180380, 0x140037f + 1);
  const slot9 = dat.subarray(0x1400390, 0x168038f + 1);
  const slot10 = dat.subarray(0x16803a0, 0x190039f + 1);
  return [
    slot1,
    slot2,
    slot3,
    slot4,
    slot5,
    slot6,
    slot7,
    slot8,
    slot9,
    slot10,
  ];
}

function getInventory(slot: Uint8Array): Uint8Array {
  let index = subfinder(slot, pattern) + pattern.byteLength + 8;
  if (!index) {
    index = 0;
    do {
      index +=
        subfinder(slot.subarray(index), pattern2) + pattern2.byteLength + 3;
    } while (slot[index - 3] !== 0 && index);
    dlcFile = true;
  }
  const index1 =
    subfinder(
      slot.subarray(index, slot.byteLength),
      new Uint8Array(50).fill(0)
    ) +
    index +
    6;
  console.log(slot.subarray(index, index1));
  return slot.subarray(index, index1);
}

function subfinder(mylist: Uint8Array, pattern: Uint8Array): number {
  for (let i = 0; i < mylist.byteLength; i++) {
    if (
      mylist[i] === pattern[0] &&
      buffer_equal(mylist.subarray(i, i + pattern.byteLength), pattern)
    ) {
      return i;
    }
  }
  return -1; // Return -1 if pattern is not found
}

function getIdReversed(id: number[]): string {
  let final_id = '';
  const tmp = id.slice(0, 4).reverse();
  for (let i = 0; i < 4; i++) {
    final_id += decimalToHex(tmp[i], 2);
  }
  return final_id;
}

function decimalToHex(d: number, padding?: number): string {
  let hex = Number(d).toString(16);
  padding = padding === undefined ? 2 : padding;

  while (hex.length < padding) {
    hex = '0' + hex;
  }
  return hex;
}

function buffer_equal(buf1: Uint8Array, buf2: Uint8Array): boolean {
  if (buf1.byteLength !== buf2.byteLength) return false;
  for (let i = 0; i < buf1.byteLength; i++) {
    if (buf1[i] !== buf2[i]) return false;
  }
  return true;
}

function fetchInventory(file_read: ArrayBuffer) {
  const saves_array = new Uint8Array(file_read);
  slots = get_slot_ls(saves_array);
  const inventory = Array.from(getInventory(slots[selected_slot]));
  id_list = split(inventory, dlcFile ? 8 : 16);
  id_list.forEach(
    (raw_id, index) => (id_list[index] = getIdReversed(raw_id).toUpperCase())
  );
  lastList = id_list;
  console.log(inventory);
}

export const FileReaderComponent: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [fileRead, setFileRead] = useState<ArrayBuffer | null>(null);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      try {
        const result = await readFile(selectedFile);
        setFileRead(result);
      } catch (e) {
        setError(
          (e as Error).message || 'An error occurred while reading the file.'
        );
      }
    }
  };

  const readFile = (file: File): Promise<ArrayBuffer> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const arrayBuffer = e.target?.result as ArrayBuffer;
        if (
          !buffer_equal(
            new DataView(arrayBuffer.slice(0, 4)),
            new Int8Array([66, 78, 68, 52])
          )
        ) {
          alert('Insert a valid file');
          reject(new Error('Invalid file format'));
          return;
        }
        fetchInventory(arrayBuffer);
        resolve(arrayBuffer);
      };
      reader.onerror = (e) => {
        console.error('Error: ' + e.type);
        reject(new Error('Error reading file'));
      };
      reader.readAsArrayBuffer(file);
    });
  };

  const buffer_equal = (buf1: DataView, buf2: Int8Array): boolean => {
    if (buf1.byteLength !== buf2.length) return false;
    for (let i = 0; i < buf1.byteLength; i++) {
      if (buf1.getUint8(i) !== buf2[i]) return false;
    }
    return true;
  };

  return (
    <div>
      <input type="file" id="savefile" onChange={handleFileChange} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {fileRead && (
        <div>
          <h3>File Read Successfully</h3>
          {getProfileNames(fileRead).map((name, index) => (
            <div key={index}>{name}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileReaderComponent;
