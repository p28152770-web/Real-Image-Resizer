/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface UploadedImage {
  file: File;
  name: string;
  originalWidth: number;
  originalHeight: number;
  originalSize: number;
  originalFormat: string; // 'image/png', 'image/jpeg', 'image/webp'
  dataUrl: string;
}

export type ResizeMode = 'pixels' | 'percentage';
export type OutputFormat = 'image/jpeg' | 'image/png' | 'image/webp';

export interface ResizeSettings {
  mode: ResizeMode;
  width: number;
  height: number;
  percentage: number;
  lockAspectRatio: boolean;
  quality: number; // 1 - 100 (visible value)
  format: OutputFormat;
  
  // Advanced features to beat competitors
  cropActive: boolean;
  cropX: number; // percentage (0-100)
  cropY: number; // percentage (0-100)
  cropWidth: number; // percentage (0-100)
  cropHeight: number; // percentage (0-100)
  cropAspectRatio: 'free' | '1:1' | '16:9' | '4:3' | '9:16';
  
  rotation: 0 | 90 | 180 | 270;
  flipH: boolean;
  flipV: boolean;
  
  useTargetSize: boolean;
  targetSizeKb: number; // in KB
}

export interface ProcessResult {
  resizedDataUrl: string;
  resizedWidth: number;
  resizedHeight: number;
  resizedSize: number;
  resizedFormat: OutputFormat;
  elapsedTimeMs: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  iconName: string;
}

export interface RelatedToolItem {
  title: string;
  description: string;
  badge: string;
  iconName: string;
}
