import React from 'react';
import { Tag } from '../Tag';
import { cardMetric, metrics, textColors } from './MetricPanel.css';
import clsx from 'clsx';
import { useColorScheme } from '@/providers';

interface MetricPanelProps {
  title: string;
  value: number;
  percentage: number;
  period: string;
  status: 'positive' | 'negative';
}

export function MetricPanel({
  title,
  value,
  percentage,
  period,
  status,
}: MetricPanelProps) {
  const { colorScheme } = useColorScheme();

  return (
    <div className={clsx(cardMetric, textColors[colorScheme])}>
      <strong style={{ fontSize: 18 }}>{title}</strong>
      <strong style={{ fontSize: 24 }}>
        {value.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
      </strong>
      <div className={metrics}>
        <Tag
          iconProps={{
            position: 'left',
            icon: status === 'positive' ? 'call_made' : 'call_received',
          }}
          label={String(percentage + '%')}
          variant={status === 'positive' ? 'success' : 'error'}
        />
        <span>em relação ao {period} anterior</span>
      </div>
    </div>
  );
}
