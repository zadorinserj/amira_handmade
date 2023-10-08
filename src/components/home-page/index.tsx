import Image from 'next/image';
import { useState } from 'react';

import { Typography } from '@alfalab/core-components/typography';
import { Grid } from '@alfalab/core-components/grid';
import { Amount } from '@alfalab/core-components/amount';
import { AmountInput } from '@alfalab/core-components/amount-input';
import { Space } from '@alfalab/core-components/space';
import { SidePanel } from '@alfalab/core-components/side-panel';
import { Button } from '@alfalab/core-components/button';
import { PopupSheet } from '@alfalab/core-components/popup-sheet';
import { StepperInput } from '@alfalab/core-components/stepper-input';

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
                </Grid.Row>
            </Space>
            <SidePanel open={false} onClose={handleClose}>
                <SidePanel.Header sticky={true} hasCloser={true} title='Оформление заказа' />
                <SidePanel.Content>
                    <div
                        style={{
                            height: '100%',
                        }}
                    >
                        <Space fullWidth={true} size={16}>
                            <Typography.Title tag='div' view='xsmall' weight='regular'>
                                Стоимость:&nbsp;
                                <Amount value={3600} minority={1} currency='RUB' />
                            </Typography.Title>
                            <AmountInput
                                size='m'
                                block={true}
                                label='Количество'
                                value={quantity}
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
            <PopupSheet hasCloser={true} swipeable={true} open={open} onClose={() => setOpened(false)} padding={0}>
                <div style={{ padding: '32px' }}>
                    <Space fullWidth={true} direction='vertical' size={16}>
                        <Typography.Title tag='div' view='xsmall'>
                            Оформление заказа
                        </Typography.Title>
                        <Space direction='horizontal' size={16}>
                            <StepperInput
                                style={{ width: '100%' }}
                                value={quantity}
                                onChange={(_, { value }) => setQuantity(value)}
                                step={1}
                                min={1}
                                max={3}
                                block={true}
                                disableUserInput={false}
                                placeholder=''
                                label='Укажите количество'
                                hint='Максимум 3'
                                labelView='inner'
                                size='m'
                            />
                        </Space>
                        <Space direction='horizontal' size={16}>
                            <div>
                                <Typography.Text
                                    style={{ marginBottom: '8px' }}
                                    tag='div'
                                    view='secondary-small'
                                    weight='regular'
                                >
                                    Сумма заказа: <br />
                                </Typography.Text>
                                <Amount
                                    className={styles.price}
                                    value={3600 * quantity}
                                    minority={1}
                                    currency='RUB'
                                    bold='full'
                                />
                            </div>
                            <Button view='secondary' size='m'>
                                Заказать
                            </Button>
                        </Space>
                    </Space>
                </div>
            </PopupSheet>
        </div>
    );
};
