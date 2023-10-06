import Image from 'next/image';
import { useState } from 'react';

import { Typography } from '@alfalab/core-components/typography';
import { Grid } from '@alfalab/core-components/grid';
import { Amount } from '@alfalab/core-components/amount';
import { AmountInput } from '@alfalab/core-components/amount-input';
import { Space } from '@alfalab/core-components/space';
import { SidePanel } from '@alfalab/core-components/side-panel';
import { Button } from '@alfalab/core-components/button';

import styles from './styles.module.css';

export const HomePage = () => {
    const [open, setOpened] = useState<boolean>(false);
    const [quantity, setQuantity] = useState(1);

    const handleSelect = () => {
        setOpened(true);
    };

    const handleClose = () => {
        setOpened(false);
    };

    return (
        <div>
            <Space fullWidth={true} direction='vertical' size={16}>
                <Typography.Title tag='h3' defaultMargins={true}>
                    Мягкие игрушки
                </Typography.Title>
                <Grid.Row gutter={24}>
                    <Grid.Col width={{ desktop: 6, tablet: 6, mobile: 12 }}>
                        <div onClick={handleSelect}>
                            <Space fullWidth={true} direction='vertical' size={8}>
                                <div className={styles.imageWrapper}>
                                    <Image src='/bears.webp' alt='Медведи' fill={true} objectFit='cover' />
                                </div>
                                <Typography.Title tag='div' view='xsmall' weight='regular'>
                                    Медведи из пряжи alize
                                </Typography.Title>
                                <Amount
                                    className={styles.price}
                                    value={3600}
                                    minority={1}
                                    currency='RUB'
                                    bold='major'
                                />
                            </Space>
                        </div>
                    </Grid.Col>
                    <Grid.Col width={{ desktop: 6, tablet: 6, mobile: 12 }} onClick={handleSelect}>
                        <div onClick={handleSelect}>
                            <Space fullWidth={true} direction='vertical' size={8}>
                                <div className={styles.imageWrapper}>
                                    <Image src='/bears.webp' alt='Медведи' fill={true} objectFit='cover' />
                                </div>
                                <Typography.Title tag='div' view='xsmall' weight='regular'>
                                    Медведи из пряжи alize
                                </Typography.Title>
                                <Amount
                                    className={styles.price}
                                    value={3600}
                                    minority={1}
                                    currency='RUB'
                                    bold='major'
                                />
                            </Space>
                        </div>
                    </Grid.Col>
                </Grid.Row>
            </Space>
            <SidePanel open={open} onClose={handleClose}>
                <SidePanel.Header sticky={true} hasCloser={true} title='Оформление заказа' />
                <SidePanel.Content flex={true}>
                    <div
                        style={{
                            height: '100%',
                        }}
                    >
                        <Space fullWidth={true} size={16}>
                            <Typography.Title tag='div' view='xsmall' weight='regular'>
                                Стоимость:&nbsp;
                                <Amount size='m' value={3600} minority={1} currency='RUB' />
                            </Typography.Title>
                            <AmountInput
                                size='m'
                                block={true}
                                label='Количество'
                                value={quantity}
                                currency=''
                                minority={1}
                                onChange={(_, { value }) => setQuantity(value)}
                            />
                        </Space>
                    </div>
                </SidePanel.Content>
                <SidePanel.Footer sticky={true}>
                    <Button size='s' view='primary'>
                        Оформить заказ
                    </Button>
                </SidePanel.Footer>
            </SidePanel>
        </div>
    );
};
